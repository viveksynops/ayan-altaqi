"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/data/site";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const opacity = useTransform(scrollY, [0, 560], [1, 0.35]);

  return (
    <section className="relative flex h-screen min-h-[720px] items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <Image src={images.hero} alt="Modern industrial construction site at dawn" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-on-surface/70" />
      <div className="absolute left-[8%] top-[20%] h-32 w-32 rounded-full border border-primary/30 opacity-60 animate-float" />
      <div className="absolute bottom-[14%] right-[10%] h-24 w-24 rounded-full border border-white/20 opacity-50 animate-float" />
      <Container className="relative z-10 mt-xl text-center">
        <motion.div
          className="mx-auto max-w-[820px]"
          initial={{ opacity: 0, y: 42, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-heading text-headline-h1-mobile text-white sm:text-headline-h1 lg:text-display-lg">
            Reliable Trading & Contracting Solutions
          </h1>
          <p className="mx-auto mt-md max-w-3xl font-body text-body-lg text-surface-container-highest">
            Partnering for industrial excellence across the Gulf region with precision, scale, and uncompromising quality.
          </p>
          <motion.div
            className="mt-lg flex flex-col justify-center gap-md sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button href="/services">Our Services</Button>
            <Button href="/contact" variant="metallic">Contact Us</Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
