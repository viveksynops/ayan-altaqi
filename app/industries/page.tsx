import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images, industries, services } from "@/data/site";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Industries",
  description: "Industrial sectors served by AYAN ALTAQI, including oil and gas, petrochemicals, infrastructure, healthcare, hospitality, and telecom.",
  path: "/industries"
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Sectors" title="Reliable delivery across Gulf-region industries." description="Our service platform adapts to the operating requirements of energy, infrastructure, healthcare, hospitality, and communications clients." image={images.cta} />
      <section className="bg-surface-container-low py-xl">
        <Container>
          <SectionTitle eyebrow="Industries We Serve" title="Sector Expertise" />
          <div className="grid gap-md md:grid-cols-2">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <MotionWrapper key={industry.slug} delay={index * 0.04}>
                  <article id={industry.slug} className="group relative min-h-[360px] overflow-hidden rounded-xl shadow-sm">
                    <Image src={industry.image} alt={industry.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="cinematic-overlay" />
                    <div className="absolute bottom-0 left-0 p-md">
                      <Icon className="mb-sm h-9 w-9 text-white" />
                      <h2 className="font-heading text-headline-h3 text-white">{industry.title}</h2>
                      <p className="mt-sm max-w-xl font-body text-body-md text-white/80">{industry.description}</p>
                    </div>
                  </article>
                </MotionWrapper>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="bg-surface py-xl">
        <Container>
          <SectionTitle eyebrow="Service Fit" title="How We Support Each Sector" />
          <div className="grid gap-sm md:grid-cols-4">
            {services.map((service) => (
              <MotionWrapper key={service.slug} className="rounded-lg bg-surface-container-lowest p-md shadow-sm">
                <h3 className="font-heading text-body-lg font-bold text-primary">{service.title}</h3>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
