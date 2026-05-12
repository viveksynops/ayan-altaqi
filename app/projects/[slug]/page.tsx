import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { projects } from "@/data/site";
import { createMetadata } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.image
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative flex min-h-[72vh] items-end overflow-hidden pt-28">
        <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover" />
        <div className="cinematic-overlay" />
        <Container className="relative z-10 pb-xl">
          <Link href="/projects" className="mb-md inline-flex items-center gap-sm font-body text-label-sm font-bold uppercase text-inverse-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
          <MotionWrapper>
            <p className="font-body text-label-sm font-bold uppercase tracking-[0.18em] text-inverse-primary">{project.category}</p>
            <h1 className="mt-sm max-w-4xl font-heading text-headline-h1-mobile text-white sm:text-headline-h1 lg:text-display-lg">{project.title}</h1>
            <p className="mt-md max-w-2xl font-body text-body-lg text-white/82">{project.summary}</p>
          </MotionWrapper>
        </Container>
      </section>
      <section className="bg-surface-container-low py-xl">
        <Container className="grid gap-lg lg:grid-cols-[1fr_320px]">
          <MotionWrapper>
            <h2 className="font-heading text-headline-h2">Scope of Work</h2>
            <div className="mt-md grid gap-md md:grid-cols-2">
              {project.scope.map((item) => (
                <div key={item} className="glass-panel rounded-xl bg-white/80 p-md">
                  <h3 className="font-heading text-headline-h3 text-primary">{item}</h3>
                  <p className="mt-sm font-body text-body-md text-secondary">Delivered with disciplined planning, site coordination, documentation, and safety-led execution standards.</p>
                </div>
              ))}
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.12} className="h-fit rounded-xl bg-white p-md shadow-sm">
            <p className="font-body text-sm text-secondary">Location</p>
            <p className="font-heading text-headline-h3">{project.location}</p>
            <p className="mt-md font-body text-sm text-secondary">Year</p>
            <p className="font-heading text-headline-h3">{project.year}</p>
            <p className="mt-md font-body text-sm text-secondary">Sector</p>
            <p className="font-heading text-headline-h3">{project.category}</p>
          </MotionWrapper>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
