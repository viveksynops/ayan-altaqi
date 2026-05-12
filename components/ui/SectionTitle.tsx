"use client";

import { cn } from "@/lib/utils";
import { MotionWrapper } from "./MotionWrapper";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <MotionWrapper className={cn("mb-lg", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow ? (
        <span className="mb-xs block font-body text-label-sm font-bold uppercase tracking-[0.16em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-heading text-headline-h2 text-on-surface">{title}</h2>
      {description ? <p className="mt-sm font-body text-body-lg text-secondary">{description}</p> : null}
    </MotionWrapper>
  );
}
