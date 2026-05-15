"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, productNavLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

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
            const isProducts = link.label === "Products";
            const active = isProducts ? pathname.startsWith("/products") : pathname === link.href;
            return isProducts ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                onFocus={() => setProductsOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setProductsOpen(false);
                  }
                }}
              >
                <Link
                  href={link.href}
                  aria-expanded={productsOpen}
                  className={cn(
                    "flex items-center gap-1 border-b-2 pb-1 font-body text-label-sm font-bold uppercase transition-colors duration-300",
                    active ? "border-primary text-primary" : "border-transparent text-on-surface hover:text-primary"
                  )}
                  onClick={() => setProductsOpen(false)}
                >
                  {link.label}
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", productsOpen && "rotate-180")} />
                </Link>
                <div
                  className={cn(
                    "absolute left-1/2 top-full min-w-56 -translate-x-1/2 pt-4 transition-all duration-200",
                    productsOpen ? "visible opacity-100" : "invisible opacity-0"
                  )}
                >
                  <div className="rounded-lg border border-outline-variant/20 bg-white p-2 shadow-glass">
                    {productNavLinks.map((productLink) => (
                      <Link
                        key={productLink.href}
                        href={productLink.href}
                        className={cn(
                          "block rounded px-4 py-3 font-body text-label-sm font-bold uppercase transition-colors duration-200",
                          pathname === productLink.href ? "bg-primary text-white" : "text-on-surface hover:bg-surface-container hover:text-primary"
                        )}
                        onClick={() => setProductsOpen(false)}
                      >
                        {productLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
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
                  link.label === "Products" ? (
                    <div key={link.href} className="grid gap-2">
                      <Link
                        href={link.href}
                        className={cn(
                          "rounded px-sm py-sm font-body text-label-sm font-bold uppercase",
                          pathname.startsWith("/products") ? "bg-primary text-white" : "text-on-surface hover:bg-surface-container"
                        )}
                      >
                        {link.label}
                      </Link>
                      <div className="grid gap-1 pl-sm">
                        {productNavLinks.map((productLink) => (
                          <Link
                            key={productLink.href}
                            href={productLink.href}
                            className={cn(
                              "rounded px-sm py-2 font-body text-label-sm font-bold uppercase",
                              pathname === productLink.href ? "bg-primary/10 text-primary" : "text-secondary hover:bg-surface-container"
                            )}
                          >
                            {productLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
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
                  )
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
