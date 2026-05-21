import { motion } from "motion/react";
import { HeroCarousel } from "@/app/components/carousel/HeroCarousel";
import { HeroContent } from "@/app/components/sections/HeroContent";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroContent />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] lg:aspect-[5/3] w-full lg:w-[130%]"
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
