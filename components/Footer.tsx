import Image from "next/image";
import Link from "next/link";
import { Globe2, Linkedin, Share2 } from "lucide-react";
import { contactPeople, navLinks, siteConfig } from "@/data/site";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-highest px-gutter py-xl">
      <Container className="px-0">
        <div className="grid gap-lg md:grid-cols-4">
          <div className="flex flex-col gap-md">
            <Image src={siteConfig.footerLogo} alt="AYAN ALTAQI Logo" width={120} height={120} className="h-24 w-24 object-contain" />
            <div>
              <h2 className="font-heading text-body-lg font-bold text-on-surface">{siteConfig.name}</h2>
              <p className="mt-xs font-body text-sm uppercase tracking-wider text-secondary">{siteConfig.tagline}</p>
            </div>
          </div>
          <div>
            <h3 className="mb-md font-heading text-body-lg font-bold">Quick Links</h3>
            <ul className="grid gap-sm">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link className="font-body text-on-surface-variant transition-colors hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-md font-heading text-body-lg font-bold">Contact</h3>
            <ul className="grid gap-sm">
              {contactPeople.map((person) => (
                <li key={person.name} className="font-body text-on-surface-variant">
                  <span className="block font-semibold text-on-surface">{person.name}</span>
                  <span className="block text-sm">{person.role}</span>
                  <Link className="text-sm transition-colors hover:text-primary" href={`tel:${person.phone.replace(/\s/g, "")}`}>
                    {person.phone}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-md font-heading text-body-lg font-bold">Follow Us</h3>
            <div className="flex gap-md">
              <Link aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface-variant transition-all hover:bg-primary hover:text-white" href="#">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link aria-label="Share company profile" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface-variant transition-all hover:bg-primary hover:text-white" href="#">
                <Share2 className="h-5 w-5" />
              </Link>
              <Link aria-label="Visit language page" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface-variant transition-all hover:bg-primary hover:text-white" href="#">
                <Globe2 className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-lg flex flex-col items-center justify-between gap-md border-t border-outline-variant/30 pt-md md:flex-row">
          <p className="font-body text-sm text-on-surface-variant">© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-md">
            <Link className="text-xs text-secondary transition-colors hover:text-primary" href="#">English</Link>
            <Link className="text-xs text-secondary transition-colors hover:text-primary" href="#">العربية</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
