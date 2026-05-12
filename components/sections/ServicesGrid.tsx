"use client";

import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StaggerGroup, StaggerItem } from "@/components/ui/MotionWrapper";
import { services } from "@/data/site";

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-surface-container-low py-xl">
      <Container>
        <SectionTitle
          eyebrow="Professional Trading & Contracting Solutions"
          title="Our Core Services"
          description={compact ? undefined : "A full industrial support platform for complex project environments, from manpower and materials to maintenance and access systems."}
        />
        <StaggerGroup className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <AnimatedCard
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                href={`/services#${service.slug}`}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
