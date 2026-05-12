import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectExplorer } from "@/components/sections/ProjectExplorer";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { images } from "@/data/site";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "View AYAN ALTAQI project showcases across oil and gas, infrastructure, petrochemicals, healthcare, hospitality, and telecom.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Project Showcase" title="Delivery across critical industrial environments." description="A curated view of project support programs spanning access, maintenance, manpower, procurement, and civil works." image={images.projects} />
      <section className="bg-surface-container-low py-xl">
        <Container>
          <SectionTitle eyebrow="Selected Work" title="Project Portfolio" description="Filter by sector, open animated previews, or view a dedicated project detail page." />
          <ProjectExplorer />
        </Container>
      </section>
    </>
  );
}
