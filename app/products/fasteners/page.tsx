import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { ProductCategoryGrid } from "@/components/sections/ProductCategoryGrid";
import { fastenerProducts } from "@/data/site";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Fasteners",
  description: "Fastener products supplied by AYAN ALTAQI, including bolts, screws, nuts, studs, rivets, anchors, washers, and related industrial hardware.",
  path: "/products/fasteners"
});

export default function FastenersPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Fasteners"
        description="Industrial fastening products for construction, mechanical assembly, fabrication, and maintenance requirements."
        image="/images/fasteners.jpg"
      />
      <ProductCategoryGrid
        eyebrow="Fastener Range"
        title="Fasteners and Hardware"
        description="Bolts, screws, nuts, washers, anchors, rivets, studs, inserts, and related fastening products for project-ready supply."
        products={fastenerProducts}
      />
      <CtaBanner />
    </>
  );
}
