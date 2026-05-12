import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { MotionWrapper, StaggerGroup, StaggerItem } from "@/components/ui/MotionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images, values } from "@/data/site";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Learn about AYAN ALTAQI Trading & Contracting, our mission, values, leadership approach, and industrial delivery standards.",
  path: "/about"
});

const timeline = [
  ["2011", "Founded with a focus on industrial trading and project support."],
  ["2015", "Expanded into equipment, manpower, and civil contracting services."],
  ["2019", "Built a broader Gulf supplier network for complex procurement programs."],
  ["2026", "Operating as a multi-service partner for enterprise and governmental projects."]
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Company Profile" title="Industrial capability built on reliability." description="AYAN ALTAQI combines local execution discipline with global sourcing reach to support critical projects across the Gulf." image={images.about} />
      <section className="relative overflow-hidden bg-surface-container-lowest py-xl">
        <div className="industrial-texture absolute inset-0 opacity-[0.03]" />
        <Container className="relative z-10 grid gap-lg lg:grid-cols-2">
          <MotionWrapper>
            <h2 className="font-heading text-headline-h2 text-primary">Mission & Vision</h2>
            <p className="mt-md font-body text-body-lg text-secondary">Our mission is to deliver dependable contracting, manpower, trading, and maintenance solutions that help clients execute with confidence. Our vision is to become a benchmark Gulf-region industrial partner known for precision, safety, and long-term trust.</p>
          </MotionWrapper>
          <MotionWrapper delay={0.15} className="relative min-h-[420px] overflow-hidden rounded-xl shadow-2xl">
            <Image src={images.team} alt="AYAN ALTAQI leadership and project team" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </MotionWrapper>
        </Container>
      </section>
      <section className="bg-surface-container-low py-xl">
        <Container>
          <SectionTitle eyebrow="Operating Principles" title="Why Choose Us" />
          <StaggerGroup className="grid gap-md md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="glass-panel h-full rounded-xl bg-white/80 p-md">
                    <Icon className="mb-md h-9 w-9 text-primary" />
                    <h3 className="font-heading text-headline-h3">{value.title}</h3>
                    <p className="mt-sm font-body text-body-md text-secondary">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>
      <section className="bg-surface py-xl">
        <Container>
          <SectionTitle eyebrow="Progression" title="Company Timeline" />
          <div className="mx-auto max-w-4xl">
            {timeline.map(([year, text]) => (
              <MotionWrapper key={year} className="grid grid-cols-[96px_1fr] gap-md border-l-2 border-outline-variant pb-lg pl-md last:pb-0">
                <span className="font-heading text-headline-h3 text-primary">{year}</span>
                <p className="font-body text-body-lg text-secondary">{text}</p>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-surface-container-lowest py-xl">
        <Container>
          <SectionTitle eyebrow="Assurance" title="Certifications & Compliance" description="The production site is structured for certification display, vendor prequalification details, safety documentation, and project compliance evidence." />
          <div className="grid gap-md md:grid-cols-3">
            {["HSE Systems", "Vendor Compliance", "Quality Documentation"].map((item) => (
              <MotionWrapper key={item} className="rounded-xl border border-outline-variant/40 bg-white p-md text-center shadow-sm">
                <h3 className="font-heading text-headline-h3 text-primary">{item}</h3>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
