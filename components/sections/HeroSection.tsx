"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { images } from "@/data/site";

const slides = [
  {
    image: images.hero,
    title: (
      <>
        Approved Supplier Of Premium{" "}
        <span className="text-primary-container">Industrial Materials</span> In{" "}
        <span className="text-primary-container">Saudi Arabia</span>
      </>
    ),
    description:
      "As a certified supplier, AYAN ALTAQI offers superior industrial materials and equipment to meet the diverse needs of industries across Saudi Arabia, backed by strong partnerships with world-trusted manufacturers."
  },
  {
    image: "/images/hero2.png",
    title: (
      <>
        Empowering Saudi Industry With Trusted Materials For Over{" "}
        <span className="text-primary-container">20 Years</span>
      </>
    ),
    description:
      "For more than two decades, AYAN ALTAQI delivers certified high-quality industrial materials tailored for the oil and gas, petrochemical, and infrastructure sectors, ensuring quality, reliability, and unmatched performance."
  },
  {
    image: "/images/hero3.png",
    title: (
      <>
        Delivering Excellence In{" "}
        <span className="text-primary-container">Industrial Equipment</span> And{" "}
        <span className="text-primary-container">Materials Supply</span>
      </>
    ),
    description:
      "AYAN ALTAQI provides top-tier industrial equipment and materials, ensuring durability and exceptional performance, making us a preferred choice for businesses seeking quality and reliability in Saudi Arabia's industrial landscape."
  }
];

export function HeroSection() {
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const opacity = useTransform(scrollY, [0, 560], [1, 0.35]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative flex h-screen min-h-[720px] items-center overflow-hidden bg-inverse-surface">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="absolute inset-0"
          style={{ y, opacity }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={active === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/58" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07101d]/95 via-[#07101d]/58 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/20 to-transparent" />

      <Container className="relative z-10 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${active}`}
            className="max-w-5xl text-left"
            initial={{ opacity: 0, x: -34 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="max-w-4xl font-heading text-[42px] font-bold leading-[1.15] text-white sm:text-[56px] lg:text-[64px]">
              {slide.title}
            </h1>
            <p className="mt-lg max-w-4xl font-body text-[19px] font-semibold leading-9 text-white md:text-[22px]">
              {slide.description}
            </p>
            <Link
              href="/about"
              className="mt-lg inline-flex min-h-[80px] items-center justify-center gap-md bg-primary px-lg font-heading text-body-lg font-bold uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-container hover:shadow-glow"
            >
              Read More
              <ArrowRight className="h-6 w-6" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </Container>

      <div className="absolute right-md top-1/2 z-20 flex -translate-y-1/2 flex-col gap-sm">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to hero slide ${index + 1}`}
            className={`h-5 w-5 rounded-full border-2 border-white transition-all duration-300 ${
              active === index ? "bg-white" : "bg-transparent"
            }`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
