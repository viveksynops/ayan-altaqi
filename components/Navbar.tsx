"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all duration-500 ease-premium",
        scrolled || open
          ? "border-outline-variant/20 bg-surface/85 shadow-sm backdrop-blur-xl"
          : "border-white/10 bg-surface/65 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-container-max items-center justify-between px-gutter py-4">
        <Link href="/" aria-label="AYAN ALTAQI home" className="relative z-10 block">
          <Image src={siteConfig.logo} alt="AYAN ALTAQI" width={82} height={82} priority className="h-[72px] w-[72px] object-contain md:h-[82px] md:w-[82px]" />
        </Link>
        <nav className="hidden items-center gap-md md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b-2 pb-1 font-body text-label-sm font-bold uppercase transition-colors duration-300",
                  active ? "border-primary text-primary" : "border-transparent text-on-surface hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Button href="/contact" className="scale-95">Get Quote</Button>
        </div>
        <button
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded border border-outline-variant/40 bg-white/50 text-on-surface backdrop-blur md:hidden"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mx-gutter mb-md rounded-lg border border-outline-variant/30 bg-surface-container-lowest/95 p-md shadow-glass backdrop-blur-xl">
              <div className="grid gap-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded px-sm py-sm font-body text-label-sm font-bold uppercase",
                      pathname === link.href ? "bg-primary text-white" : "text-on-surface hover:bg-surface-container"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button href="/contact" className="mt-sm w-full">Get Quote</Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
