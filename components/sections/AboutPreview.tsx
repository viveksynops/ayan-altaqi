import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { images } from "@/data/site";

const aboutPoints = [
  "Dynamically engineer value-focused supply chains.",
  "Strategically optimize client-centric material sourcing.",
  "Empowering transformative partnerships through excellence."
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-surface-container-lowest py-xl">
      <div className="industrial-texture pointer-events-none absolute inset-0 opacity-[0.03]" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-lg lg:grid-cols-2">
          <MotionWrapper>
            <p className="mb-sm font-body text-label-sm font-bold uppercase tracking-[0.08em] text-primary">
              ← About Our Company →
            </p>
            <h2 className="max-w-[720px] font-heading text-[36px] font-bold leading-[1.18] text-on-surface md:text-[46px] lg:text-[52px]">
              Dedicated To Providing Top-Notch Service
            </h2>
            <p className="mt-md max-w-[760px] font-body text-[17px] leading-8 text-secondary md:text-body-lg">
              AYAN ALTAQI is a leading industrial materials supplier, delivering reliable, high-quality materials for critical projects across sectors. Our extensive offerings, sourced from top global manufacturers, meet strict industry standards, ensuring optimal performance and durability.
            </p>
            <ul className="mt-md space-y-sm">
              {aboutPoints.map((point) => (
                <li key={point} className="flex items-start gap-sm font-body text-[17px] leading-8 text-on-surface md:text-body-md">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 fill-primary text-white" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-lg">
              <Button href="/about" className="rounded-none px-lg py-md">Explore More</Button>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.15}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
              <Image src={images.about} alt="Global industrial trading and logistics" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
