import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StaggerGroup, StaggerItem } from "@/components/ui/MotionWrapper";
import { industries } from "@/data/site";

export function IndustriesGrid() {
  return (
    <section className="bg-surface-container-lowest py-xl">
      <Container>
        <SectionTitle
          eyebrow="Delivering reliable solutions across multiple industries"
          title="Industries We Serve"
        />
        <StaggerGroup className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <StaggerItem key={industry.slug}>
                <Link href={`/industries#${industry.slug}`} className="group relative block h-[300px] overflow-hidden rounded-xl shadow-sm transition-all duration-500 ease-premium hover:-translate-y-2 hover:shadow-glow-lg">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} Industry`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />
                  <div className="absolute bottom-0 left-0 flex w-full items-center gap-sm p-md">
                    <Icon aria-hidden className="h-8 w-8 text-white" />
                    <h3 className="font-heading text-xl font-bold text-white">{industry.title}</h3>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
