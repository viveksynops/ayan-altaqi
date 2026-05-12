"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { projects } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function ProjectExplorer() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.category)))], []);
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const filtered = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      <div className="mb-lg flex flex-wrap justify-center gap-sm">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={cn(
              "rounded-full border px-md py-sm font-body text-label-sm font-bold uppercase transition-all duration-300",
              active === category
                ? "border-primary bg-primary text-white shadow-glow"
                : "border-outline-variant bg-white text-on-surface hover:border-primary hover:text-primary"
            )}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div layout className="columns-1 gap-md md:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.article
              layout
              key={project.slug}
              className="group mb-md break-inside-avoid overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="block w-full text-left" type="button" onClick={() => setSelected(project)}>
                <div className={cn("relative overflow-hidden", index % 2 ? "h-[420px]" : "h-[320px]")}>
                  <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-md">
                    <p className="mb-xs font-body text-label-sm font-bold uppercase tracking-[0.12em] text-inverse-primary">{project.category}</p>
                    <h3 className="font-heading text-headline-h3 text-white">{project.title}</h3>
                  </div>
                </div>
              </button>
              <div className="flex items-center justify-between p-md">
                <span className="font-body text-sm text-secondary">{project.location} · {project.year}</span>
                <Link aria-label={`Open ${project.title} details`} href={`/projects/${project.slug}`} className="text-primary">
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-gutter backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl bg-surface-container-lowest shadow-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative h-72">
                <Image src={selected.image} alt={selected.title} fill sizes="100vw" className="object-cover" />
                <div className="cinematic-overlay" />
                <button className="absolute right-md top-md rounded-full bg-white/90 p-sm text-on-surface" type="button" aria-label="Close preview" onClick={() => setSelected(null)}>
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-md left-md right-md">
                  <p className="font-body text-label-sm font-bold uppercase tracking-[0.12em] text-inverse-primary">{selected.category}</p>
                  <h3 className="font-heading text-headline-h2 text-white">{selected.title}</h3>
                </div>
              </div>
              <div className="grid gap-md p-md md:grid-cols-[1fr_220px]">
                <div>
                  <p className="font-body text-body-md text-secondary">{selected.summary}</p>
                  <div className="mt-md flex flex-wrap gap-sm">
                    {selected.scope.map((item) => (
                      <span key={item} className="rounded-full bg-surface-container px-sm py-xs font-body text-sm text-on-surface-variant">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="glass-panel rounded p-md">
                  <p className="font-body text-sm text-secondary">Location</p>
                  <p className="font-heading font-bold">{selected.location}</p>
                  <p className="mt-sm font-body text-sm text-secondary">Year</p>
                  <p className="font-heading font-bold">{selected.year}</p>
                  <Button href={`/projects/${selected.slug}`} className="mt-md w-full">Details</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
