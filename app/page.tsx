import { AboutPreview } from "@/components/sections/AboutPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsSection } from "@/components/sections/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProductsSection />
      <ServicesGrid compact />
      <IndustriesGrid />
      <StatsSection />
      <CtaBanner />
    </>
  );
}
