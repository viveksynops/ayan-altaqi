import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryHref = "/contact",
  primaryLabel = "Get Quote"
}: {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden pt-28">
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="cinematic-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(181,0,11,0.28),transparent_40%,rgba(255,255,255,0.08))]" />
      <Container className="relative z-10">
        <MotionWrapper className="max-w-3xl">
          {eyebrow ? <p className="mb-sm font-body text-label-sm font-bold uppercase tracking-[0.18em] text-inverse-primary">{eyebrow}</p> : null}
          <h1 className="font-heading text-headline-h1-mobile text-white sm:text-headline-h1 lg:text-display-lg">
            {title}
          </h1>
          <p className="mt-md max-w-2xl font-body text-body-lg text-white">{description}</p>
          <div className="mt-lg flex flex-col gap-md sm:flex-row">
            <Button href={primaryHref}>{primaryLabel}</Button>
            <Button href="/services" variant="ghost">Explore Services</Button>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
