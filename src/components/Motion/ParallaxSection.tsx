// components/ParallaxSection.tsx
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
}

export default function ParallaxSection({
  children,
  offset = 300,
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <section
      ref={ref}
      className="h-screen flex justify-center items-center scroll-snap-start relative overflow-hidden"
    >
      <motion.div style={{ y }} className="relative z-10">
        {children}
      </motion.div>
    </section>
  );
}
