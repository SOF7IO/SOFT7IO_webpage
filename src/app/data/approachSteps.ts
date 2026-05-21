import type { ApproachStep } from "@/app/types";

export const APPROACH_STEPS: readonly ApproachStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding your business, users, and project requirements to create a solid foundation.",
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "Iterative process combining clean design with robust code, keeping you involved every step.",
  },
  {
    number: "03",
    title: "Launch & Support",
    description:
      "Smooth deployment and ongoing support to ensure your product continues to perform.",
  },
] as const;
