import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StaggerGroup, StaggerItem } from "@/components/ui/MotionWrapper";
import { products } from "@/data/site";

export function ProductsSection() {
  return (
    <section className="bg-[#f6f4f5] py-xl">
      <Container>
        <div className="mb-lg text-center">
          <h2 className="font-heading text-[28px] font-bold uppercase leading-9 tracking-[0.22em] text-primary">
            Products
          </h2>
          <div className="mx-auto mt-xs flex w-16 items-center justify-center gap-xs">
            <span className="h-[2px] w-3 bg-primary" />
            <span className="h-[2px] w-3 bg-primary" />
            <span className="h-[2px] w-3 bg-primary" />
            <span className="h-[2px] w-3 bg-primary" />
          </div>
        </div>
        <StaggerGroup className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <StaggerItem key={product.title}>
              <article className="group rounded-lg border border-outline-variant/30 bg-white p-sm shadow-[0_8px_22px_rgba(80,40,40,0.14)] transition-all duration-300 ease-premium hover:-translate-y-2 hover:shadow-glow">
                <div className="relative aspect-[157/107] overflow-hidden border-2 border-primary/80 bg-surface-container-lowest">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-premium group-hover:scale-105"
                  />
                </div>
                <div className="px-sm pb-sm pt-sm text-center">
                  <h3 className="min-h-[40px] font-heading text-base font-bold uppercase leading-5 tracking-[0.12em] text-on-surface">
                    {product.title}
                  </h3>
              
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
