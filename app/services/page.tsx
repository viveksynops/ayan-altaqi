import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { MotionWrapper, StaggerGroup, StaggerItem } from "@/components/ui/MotionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images, industries, services } from "@/data/site";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description: "Explore AYAN ALTAQI industrial contracting, manpower, equipment rental, scaffolding, maintenance, trading, and procurement services.",
  path: "/services"
});

const process = ["Assess", "Mobilize", "Execute", "Control", "Handover"];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Integrated Services" title="A complete industrial support platform." description="From civil execution and access systems to manpower, procurement, and maintenance, our teams are built for high-stakes project environments." image={images.services} />
      <section className="bg-surface-container-low py-xl">
        <Container>
          <SectionTitle eyebrow="Service Portfolio" title="Detailed Capabilities" />
          <div className="grid gap-md">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionWrapper key={service.slug} delay={index * 0.03}>
                  <article id={service.slug} className="grid overflow-hidden rounded-xl bg-white shadow-sm md:grid-cols-[360px_1fr]">
                    <div className="relative min-h-72">
                      <Image src={service.image} alt={service.title} fill sizes="(min-width: 768px) 360px, 100vw" className="object-cover" />
                    </div>
                    <div className="p-md md:p-lg">
                      <Icon className="mb-sm h-8 w-8 text-primary" />
                      <h2 className="font-heading text-headline-h3 text-on-surface">{service.title}</h2>
                      <p className="mt-sm font-body text-body-lg text-secondary">{service.details}</p>
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
          <SectionTitle eyebrow="Delivery Model" title="Project Process" />
          <StaggerGroup className="grid gap-md md:grid-cols-5">
            {process.map((step, index) => (
              <StaggerItem key={step}>
                <div className="glass-panel h-full rounded-xl bg-white/80 p-md text-center">
                  <span className="mx-auto mb-md flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-white">{index + 1}</span>
                  <h3 className="font-heading text-body-lg font-bold">{step}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
      <section className="bg-surface-container-lowest py-xl">
        <Container>
          <SectionTitle eyebrow="Cross-Sector Capability" title="Industries Supported" />
          <div className="grid gap-md md:grid-cols-3">
            {industries.map((industry) => (
              <MotionWrapper key={industry.slug} className="rounded-xl border border-outline-variant/30 bg-white p-md">
                <h3 className="font-heading text-headline-h3 text-primary">{industry.title}</h3>
                <p className="mt-sm font-body text-body-md text-secondary">{industry.description}</p>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
