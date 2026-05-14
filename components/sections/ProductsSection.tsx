"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/site";

const productDescriptions: Record<string, string> = {
  Pipes: "Industrial round pipes for construction, fabrication, utilities, and project supply requirements.",
  Fittings: "A complete range of fittings for piping, mechanical, and industrial installation works.",
  Fasteners: "High-quality bolts, nuts, washers, and fastening products for demanding site applications.",
  Bolt: "Bolt products for structural fastening, machinery assembly, and industrial site requirements.",
  Screw: "Screw fasteners for mechanical fixing, installation works, and general project applications.",
  Nut: "Nut products for reliable threaded connections across industrial and construction assemblies.",
  Key: "Industrial keys for shafts, couplings, transmission parts, and mechanical locking applications.",
  Stud: "Stud fasteners for heavy-duty assemblies, flanged joints, and industrial equipment connections.",
  Rivet: "Rivet products for permanent fastening, sheet metal work, and fabrication requirements.",
  Anchor: "Anchor fasteners for concrete fixing, structural mounting, and secure site installations.",
  Nail: "Nail products for practical fastening needs across construction and support works.",
  Insert: "Threaded inserts for reinforced fastening, repair works, and durable connection points.",
  "Retain Ring": "Retaining rings for shaft, bore, mechanical retention, and equipment assembly uses.",
  Washer: "Washers for load distribution, spacing, vibration support, and fastening protection.",
  Clevis: "Clevis fasteners and pins for linkage, lifting, support, and mechanical connection systems.",
  Valves: "Reliable valve products for fluid control, industrial systems, and project maintenance needs.",
  "Commercial Steel": "Commercial steel products for workshops, construction, trading, and supply programs.",
  "Structural Steels": "Structural steel sections for fabrication, infrastructure, and heavy-duty project execution.",
  "MS Plates": "Mild steel plates for fabrication, base plates, structural works, and industrial projects.",
  "Dipped GI Coils": "Galvanized iron coils for roofing, cladding, ducting, and corrosion-resistant applications.",
  Sheets: "Steel and metal sheets for fabrication, construction, maintenance, and project supply needs.",
  Grating: "Industrial grating products for platforms, walkways, drainage covers, and access areas.",
  Angles: "Steel angle sections for frames, supports, brackets, and structural fabrication works.",
  "MS Round Bar": "Mild steel round bars for machining, fabrication, reinforcement, and general engineering use.",
  "Flat Bars": "Flat bar products for supports, frames, brackets, and fabrication requirements.",
  "U Beams": "U beam sections for structural support, framing, and industrial construction applications.",
  "U Columns": "U column sections for load-bearing support, fabrication, and structural project use.",
  "I Beams": "I beam products for heavy structural support, construction, and infrastructure works.",
  "H Beams": "H beam sections for high-strength structural frames and industrial building projects.",
  Channels: "Steel channel sections for framing, supports, edge protection, and fabrication works.",
  "Rib Steel Bars": "Ribbed steel bars for reinforcement, concrete works, and civil construction projects.",
  "Square Bars": "Square bar products for fabrication, machining, supports, and general engineering use.",
  "Unequal Angle": "Unequal angle sections for specialized supports, frames, and fabrication requirements.",
  "Chequer Plates": "Chequer plates for flooring, platforms, stair treads, and anti-slip industrial surfaces.",
  "PVC & Sanitary Accessories": "PVC and sanitary accessories for plumbing, drainage, and building service works.",
  Scaffolding: "Access and scaffolding products for safe, practical, and efficient site operations.",
  "Green Fence": "Fence products for site boundaries, project protection, and temporary access control."
};

export function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const loopedProducts = useMemo(() => [...products, ...products], []);
  const maxIndex = products.length;

  const scrollSlider = (direction: "left" | "right") => {
    setActiveIndex((current) => {
      if (direction === "left") return current === 0 ? maxIndex - 1 : current - 1;
      return current + 1 >= maxIndex ? 0 : current + 1;
    });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      scrollSlider("right");
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-inverse-surface py-xl text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(227,6,19,0.24),transparent_30%),linear-gradient(135deg,rgba(181,0,11,0.32),transparent_48%)]" />
      <Container className="relative z-10">
        <div className="relative mb-xl flex items-center justify-center">
          <button
            type="button"
            aria-label="Previous products"
            className="absolute left-0 hidden h-[70px] w-[70px] items-center justify-center rounded-full bg-white text-on-surface shadow-glow transition-all duration-300 hover:scale-105 md:flex"
            onClick={() => scrollSlider("left")}
          >
            <ArrowLeft className="h-7 w-7" />
          </button>
          <h2 className="max-w-3xl text-center font-heading text-headline-h1-mobile font-bold leading-tight text-white md:text-[56px] md:leading-[1.18]">
            Discover Products That Power Your Work
          </h2>
          <button
            type="button"
            aria-label="Next products"
            className="absolute right-0 hidden h-[70px] w-[70px] items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-on-surface md:flex"
            onClick={() => scrollSlider("right")}
          >
            <ArrowRight className="h-7 w-7" />
          </button>
        </div>

        <div className="overflow-hidden pb-sm">
          <div
            className="flex gap-md transition-transform duration-[1200ms] ease-premium"
            style={{ transform: `translateX(calc(-${activeIndex} * (25% + 18px)))` }}
          >
          {loopedProducts.map((product, index) => (
            <article
              data-product-card
              key={`${product.title}-${index}`}
              className="group min-w-[82vw] bg-white p-md text-on-surface shadow-[0_18px_36px_rgba(0,0,0,0.18)] sm:min-w-[46%] lg:min-w-[calc((100%-72px)/4)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"
                  className="object-cover brightness-[0.68] contrast-110 transition-transform duration-700 ease-premium group-hover:scale-105"
                />
              </div>
              <div className="relative px-sm pb-sm pt-md">
                <h3 className="font-heading text-[28px] font-bold leading-9 text-on-surface">
                  {product.title}
                </h3>
                <p className="mt-md min-h-[96px] font-body text-[24px] leading-9 text-secondary md:text-body-lg">
                  {productDescriptions[product.title] ?? "Industrial product supply for project-ready applications and site requirements."}
                </p>
              </div>
            </article>
          ))}
          </div>
        </div>

        <div className="mt-md flex justify-center gap-md md:hidden">
          <button
            type="button"
            aria-label="Previous products"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-on-surface"
            onClick={() => scrollSlider("left")}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next products"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 text-white"
            onClick={() => scrollSlider("right")}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
