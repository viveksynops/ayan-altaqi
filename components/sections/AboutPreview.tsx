import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { images } from "@/data/site";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-surface-container-lowest py-xl">
      <div className="industrial-texture pointer-events-none absolute inset-0 opacity-[0.03]" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-lg lg:grid-cols-2">
          <MotionWrapper>
            <h2 className="mb-md font-heading text-headline-h2 text-primary">About Us</h2>
            <p className="font-body text-body-lg text-secondary">
              AYAN ALTAQI Trading & Contracting is a premier provider of comprehensive industrial solutions across the GCC region, dedicated to engineering excellence and uncompromising reliability. By integrating global supply chain capabilities with localized expertise, we deliver high-stakes enterprise and governmental projects with absolute precision, robust safety standards, and sustainable practices.
            </p>
            <div className="mt-lg">
              <Button href="/about" variant="dark">Company Profile</Button>
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
