import type { Metadata } from "next";
import { Briefcase, HeartHandshake, Shield, TrendingUp } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { MotionWrapper, StaggerGroup, StaggerItem } from "@/components/ui/MotionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { careers, images } from "@/data/site";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Careers",
  description: "Join AYAN ALTAQI Trading & Contracting and build a career in industrial projects, procurement, operations, and safety.",
  path: "/careers"
});

const benefits = [
  { title: "Project Exposure", icon: Briefcase },
  { title: "Safety Culture", icon: Shield },
  { title: "Career Growth", icon: TrendingUp },
  { title: "Team Support", icon: HeartHandshake }
];

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build with a disciplined industrial team." description="We look for project-minded professionals who value safety, precision, and reliable execution." image={images.careers} primaryLabel="Apply Now" primaryHref="#apply" />
      <section className="bg-surface-container-low py-xl">
        <Container>
          <SectionTitle eyebrow="Culture" title="Built for professionals who deliver." description="Our teams work across live industrial environments where clarity, preparation, and accountability matter every day." />
          <StaggerGroup className="grid gap-md md:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={benefit.title}>
                  <div className="glass-panel rounded-xl bg-white/80 p-md text-center">
                    <Icon className="mx-auto mb-sm h-8 w-8 text-primary" />
                    <h3 className="font-heading text-body-lg font-bold">{benefit.title}</h3>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>
      <section className="bg-surface py-xl">
        <Container>
          <SectionTitle eyebrow="Open Positions" title="Current Opportunities" />
          <div className="grid gap-md md:grid-cols-2">
            {careers.map((role) => (
              <MotionWrapper key={role.title} className="rounded-xl bg-white p-md shadow-sm">
                <p className="font-body text-label-sm font-bold uppercase tracking-[0.12em] text-primary">{role.department}</p>
                <h3 className="mt-xs font-heading text-headline-h3">{role.title}</h3>
                <p className="mt-sm font-body text-secondary">{role.type} · {role.location}</p>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-surface-container-lowest py-xl">
        <Container>
          <SectionTitle eyebrow="Hiring Process" title="Clear, practical, and fast" />
          <div className="grid gap-md md:grid-cols-4">
            {["Apply", "Screen", "Interview", "Mobilize"].map((step, index) => (
              <MotionWrapper key={step} className="rounded-xl border border-outline-variant/30 bg-white p-md text-center">
                <span className="mx-auto mb-sm flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-white">{index + 1}</span>
                <h3 className="font-heading text-body-lg font-bold">{step}</h3>
              </MotionWrapper>
            ))}
          </div>
        </Container>
      </section>
      <section id="apply" className="bg-surface-container-low py-xl">
        <Container>
          <SectionTitle eyebrow="Application" title="Submit Your Profile" />
          <ContactForm career />
        </Container>
      </section>
    </>
  );
}
