"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Button } from "./Button";

export function AnimatedCard({
  title,
  description,
  image,
  icon: Icon,
  href = "/contact",
  cta = "Read More"
}: {
  title: string;
  description: string;
  image: string;
  icon?: LucideIcon;
  href?: string;
  cta?: string;
}) {
  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-surface shadow-sm transition-all duration-300 ease-premium hover:-translate-y-2 hover:shadow-glow-lg"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-md">
        {Icon ? <Icon aria-hidden className="mb-sm h-7 w-7 text-primary" /> : null}
        <h3 className="mb-sm font-heading text-body-lg font-bold text-on-surface">{title}</h3>
        <p className="mb-md flex-1 font-body text-sm leading-6 text-secondary">{description}</p>
        <Button className="w-fit rounded-full px-md" href={href}>
          {cta}
        </Button>
      </div>
    </motion.article>
  );
}
