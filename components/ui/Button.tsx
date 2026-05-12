import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "metallic" | "ghost" | "dark";
  className?: string;
  type?: "button" | "submit";
};

const variants = {
  primary: "bg-primary-container text-on-primary hover:shadow-glow",
  metallic: "metallic-bg border border-outline text-on-surface hover:shadow-glow",
  ghost: "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
  dark: "bg-inverse-surface text-white hover:shadow-glow"
};

export function Button({ children, href, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-sm rounded px-md py-sm font-body text-label-sm font-bold uppercase tracking-[0.05em] transition-all duration-300 ease-premium hover:-translate-y-0.5",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
        <ArrowRight aria-hidden className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
      <ArrowRight aria-hidden className="h-4 w-4" />
    </button>
  );
}
