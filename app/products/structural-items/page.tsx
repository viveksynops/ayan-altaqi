import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { ProductCategoryGrid } from "@/components/sections/ProductCategoryGrid";
import { structuralProducts } from "@/data/site";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Structural Items",
  description: "Structural steel items supplied by AYAN ALTAQI, including plates, coils, sheets, grating, angles, beams, channels, bars, and chequer plates.",
  path: "/products/structural-items"
});

export default function StructuralItemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Structural Items"
        description="Structural steel products for fabrication, construction, infrastructure, workshops, and industrial project supply."
        image="/images/structural-items.webp"
      />
      <ProductCategoryGrid
        eyebrow="Structural Range"
        title="Steel Sections and Plates"
        description="MS plates, GI coils, sheets, grating, angles, beams, columns, channels, bars, and chequer plates for industrial applications."
        products={structuralProducts}
      />
      <CtaBanner />
    </>
  );
}
