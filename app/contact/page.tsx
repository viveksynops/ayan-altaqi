import type { Metadata } from "next";
import { MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contactPeople, images, officeAddress } from "@/data/site";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Contact AYAN ALTAQI Trading & Contracting for industrial contracting, manpower, procurement, equipment rental, and maintenance inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Start a project conversation." description="Share your requirement and our team will coordinate the right service pathway for your project, site, or procurement program." image={images.contact} />
      <section className="bg-surface-container-low py-xl">
        <Container className="grid gap-lg lg:grid-cols-[1fr_420px]">
          <div>
            <SectionTitle align="left" eyebrow="Inquiry Form" title="Tell us what you need" />
            <ContactForm />
          </div>
          <aside className="space-y-md">
            {contactPeople.map((person) => (
              <MotionWrapper key={person.name} className="glass-panel rounded-xl bg-white/80 p-md">
                <p className="font-body text-label-sm font-bold uppercase tracking-[0.12em] text-primary">{person.role}</p>
                <h3 className="mt-xs font-heading text-headline-h3">{person.name}</h3>
                <a className="mt-sm block font-body text-body-md text-secondary transition-colors hover:text-primary" href={`tel:${person.phone.replace(/\s/g, "")}`}>
                  {person.phone}
                </a>
              </MotionWrapper>
            ))}
            <MotionWrapper className="glass-panel rounded-xl bg-white/80 p-md">
              <MapPin className="mb-sm h-7 w-7 text-primary" />
              <p className="font-body text-label-sm font-bold uppercase tracking-[0.12em] text-primary">{officeAddress.label}</p>
              <address className="mt-sm not-italic font-body text-body-md leading-7 text-secondary">
                {officeAddress.lines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
            </MotionWrapper>
            <MotionWrapper className="rounded-xl bg-inverse-surface p-md text-white">
              <MessageCircle className="mb-sm h-7 w-7 text-inverse-primary" />
              <h3 className="font-heading text-headline-h3">WhatsApp Support</h3>
              <p className="mt-sm font-body text-white/75">For urgent procurement or site support, connect directly with the coordination desk.</p>
              <Button href={`https://wa.me/${contactPeople[0].whatsapp}`} className="mt-md" variant="metallic">Open WhatsApp</Button>
            </MotionWrapper>
          </aside>
        </Container>
      </section>
      <section className="bg-surface py-xl">
        <Container>
          <SectionTitle eyebrow="Location" title={officeAddress.label} />
          <MotionWrapper className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-high p-lg text-center shadow-sm">
            <div className="industrial-texture absolute inset-0 opacity-[0.06]" />
            <div className="relative z-10">
              <p className="font-body text-body-lg text-secondary">Embedded map placeholder for production integration.</p>
              <h3 className="mt-sm font-heading text-headline-h2 text-primary">Dammam, Saudi Arabia</h3>
              <address className="mt-sm not-italic font-body text-body-lg leading-8 text-secondary">
                {officeAddress.lines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
            </div>
          </MotionWrapper>
        </Container>
      </section>
    </>
  );
}
