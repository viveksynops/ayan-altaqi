import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MotionWrapper, StaggerGroup, StaggerItem } from "@/components/ui/MotionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";

type ProductItem = {
  title: string;
  image: string;
};

export function ProductCategoryGrid({
  eyebrow,
  title,
  description,
  products
}: {
  eyebrow: string;
  title: string;
  description: string;
  products: ProductItem[];
}) {
  return (
    <section className="bg-surface-container-low py-xl">
      <Container>
        <MotionWrapper>
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        </MotionWrapper>
        <StaggerGroup className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <StaggerItem key={product.title}>
              <article className="group h-full overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                </div>
                <div className="p-md">
                  <h2 className="font-heading text-headline-h3 font-bold text-on-surface">{product.title}</h2>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
