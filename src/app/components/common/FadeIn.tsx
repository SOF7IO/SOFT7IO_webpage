import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = HTMLMotionProps<"div"> & {
  readonly children: ReactNode;
};

export function FadeIn({ children, ...motionProps }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
