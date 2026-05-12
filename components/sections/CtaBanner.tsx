import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { images } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-xl">
      <div className="absolute inset-0">
        <Image src={images.cta} alt="" fill sizes="100vw" className="object-cover" />
        <div className="cinematic-overlay" />
      </div>
      <Container className="relative z-10">
        <MotionWrapper className="mx-auto max-w-4xl text-center">
          <p className="mb-sm font-body text-label-sm font-bold uppercase tracking-[0.18em] text-inverse-primary">Enterprise Project Support</p>
          <h2 className="font-heading text-headline-h2 text-white">Ready to mobilize a reliable industrial partner?</h2>
          <p className="mx-auto mt-sm max-w-2xl font-body text-body-lg text-white/80">
            From procurement and manpower to execution and maintenance, AYAN ALTAQI supports critical project delivery with disciplined coordination.
          </p>
          <div className="mt-lg flex flex-col justify-center gap-md sm:flex-row">
            <Button href="/contact">Get Quote</Button>
            <Button href="/projects" variant="ghost">View Projects</Button>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
