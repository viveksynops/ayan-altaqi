import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { images, stats } from "@/data/site";

export function StatsSection() {
  return (
    <section className="bg-surface py-xl">
      <Container>
        <div className="grid grid-cols-1 items-center gap-lg lg:grid-cols-2">
          <MotionWrapper className="relative h-[500px] overflow-hidden rounded-lg">
            <Image src={images.team} alt="Engineers reviewing industrial project drawings" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
          </MotionWrapper>
          <MotionWrapper>
            <h2 className="mb-md font-heading text-headline-h2 text-on-surface">Built on Reliability and Professionalism</h2>
            <p className="mb-lg font-body text-body-md text-secondary">
              AYAN ALTAQI Trading & Contracting delivers comprehensive solutions tailored for demanding industrial and governmental projects. We integrate global supply chains with localized engineering expertise.
            </p>
            <div className="grid grid-cols-2 gap-md">
              {stats.map((stat) => (
                <AnimatedCounter key={stat.label} {...stat} />
              ))}
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
