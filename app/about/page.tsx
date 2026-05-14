import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  BadgeCheck,
  Factory,
  Globe2,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wrench
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { MotionWrapper, StaggerGroup, StaggerItem } from "@/components/ui/MotionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contactPeople, images, products, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "About AYAN ALTAQI Trading & Contracting, an industrial supplier and contracting partner serving major projects with reliable products, compliance, and execution support.",
  path: "/about"
});

const servicePillars = [
  {
    title: "Trading",
    description:
      "Supply of pipes, fittings, valves, fasteners, structural steel, commercial steel, scaffolding, fencing, and related industrial materials.",
    icon: PackageCheck
  },
  {
    title: "Fabrication",
    description:
      "Project support for steel, access, civil, and mechanical requirements through controlled coordination and practical site execution.",
    icon: Wrench
  },
  {
    title: "Manufacturing Support",
    description:
      "Sourcing and delivery coordination from trusted manufacturers and approved suppliers for project-specific industrial requirements.",
    icon: Factory
  }
];

const whyChoose = [
  "Reliable supply support for industrial, infrastructure, and EPC project requirements.",
  "Access to trusted manufacturers and compliant product documentation.",
  "Strong focus on quality control, delivery coordination, and client communication.",
  "Product categories aligned with oil and gas, petrochemical, civil, MEP, and facility projects."
];

const policies = [
  "Quality-focused procurement",
  "Approved supplier coordination",
  "Traceable documentation",
  "Project-code compliance",
  "Responsive delivery support",
  "Continuous improvement"
];

const manufacturers = [
  "Interpipe",
  "Both-Well",
  "MEGA",
  "Metalfar",
  "Benkan",
  "Bonney Forge",
  "Erne Fittings",
  "OMB"
];

const approvals = ["Saudi Aramco", "SABIC", "EPC Contractors", "Industrial End Users"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A trusted industrial trading and contracting partner."
        description="AYAN ALTAQI supports industrial clients with dependable material supply, contracting coordination, and project-ready execution across the Gulf region."
        image={images.about}
      />

      <section id="overview" className="relative overflow-hidden bg-surface-container-lowest py-xl">
        <div className="industrial-texture absolute inset-0 opacity-[0.025]" />
        <div className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-[420px] max-w-5xl opacity-[0.045] [background-image:repeating-linear-gradient(135deg,transparent_0,transparent_18px,#1a1c1c_19px,transparent_20px)]" />
        <Container className="relative z-10">
          <div className="grid items-center gap-lg lg:grid-cols-[1.05fr_0.95fr]">
            <MotionWrapper>
              <p className="mb-sm font-body text-label-sm font-bold uppercase tracking-[0.18em] text-primary">
                Overview
              </p>
              <h2 className="font-heading text-[28px] font-bold leading-[1.35] text-on-surface md:text-[34px]">
                AYAN ALTAQI is a leading supplier of industrial products in the Gulf region, known for its expertise, reliability, and commitment to supporting critical project requirements.
              </h2>
              <p className="mt-md font-body text-body-lg text-secondary">
                We are proud to support clients with reliable and compliant products sourced through trusted manufacturers and supplier networks. Recognized by contractors, industrial operators, and enterprise clients, AYAN ALTAQI collaborates with project teams across oil and gas, petrochemical, infrastructure, civil, MEP, maintenance, and facility sectors to foster sustainable success in the region's competitive industrial landscape.
              </p>
            </MotionWrapper>
            <MotionWrapper delay={0.12}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-outline-variant/40 bg-white shadow-2xl">
                <Image
                  src={images.services}
                  alt="Industrial product supply and project materials"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </MotionWrapper>
          </div>
        </Container>
      </section>

   

      <section id="why-ayan" className="relative overflow-hidden bg-inverse-surface py-xl text-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(181,0,11,0.35),transparent_45%,rgba(255,255,255,0.08))]" />
        <Container className="relative z-10">
          <div className="grid gap-lg lg:grid-cols-[0.85fr_1.15fr]">
            <MotionWrapper>
              <p className="mb-sm font-body text-label-sm font-bold uppercase tracking-[0.18em] text-inverse-primary">
                Why AYAN
              </p>
              <h2 className="font-heading text-headline-h2">Built for approved project supply and dependable execution.</h2>
              <p className="mt-md font-body text-body-lg text-white/75">
                AYAN ALTAQI combines trading capability with contracting awareness, helping project teams receive the right product, documentation, and coordination at the right time.
              </p>
            </MotionWrapper>
            <StaggerGroup className="grid gap-md md:grid-cols-2">
              {whyChoose.map((item) => (
                <StaggerItem key={item}>
                  <div className="rounded-lg border border-white/10 bg-white/10 p-md backdrop-blur-md">
                    <BadgeCheck className="mb-sm h-6 w-6 text-inverse-primary" />
                    <p className="font-body text-body-md text-white/82">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Container>
      </section>




          <section className="bg-surface-container-lowest py-xl">
        <Container>
          <div className="grid items-center gap-lg lg:grid-cols-[1fr_0.95fr]">
            <MotionWrapper>
              <h2 className="font-heading text-[28px] font-bold leading-10 text-on-surface md:text-[30px]">
                AYAN ALTAQI values integrity, excellence, and innovation. As a trusted industrial supplier, we consistently uphold high industry standards, delivering solutions that meet strict compliance and quality requirements from leading manufacturers around the world.
              </h2>
              <p className="mt-md font-body text-body-lg text-secondary">
                Our commitment to sustainability and continuous improvement provides clients with access to dependable industrial products. Through quality-focused sourcing, supplier coordination, and disciplined project support, AYAN ALTAQI is committed to delivering consistent reliability across every order and every project.
              </p>
            </MotionWrapper>
            <MotionWrapper delay={0.12}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-surface-container shadow-sm">
                <Image
                  src="/products/alloy-steel-tube.webp"
                  alt="Industrial pipes supplied by AYAN ALTAQI"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
            </MotionWrapper>
          </div>
        </Container>
      </section>


      <CtaBanner />
    </>
  );
}
