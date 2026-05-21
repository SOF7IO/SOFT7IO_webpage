import { ApproachStepCard } from "@/app/components/common/ApproachStepCard";
import { FadeIn } from "@/app/components/common/FadeIn";
import { SectionHeading } from "@/app/components/common/SectionHeading";
import { APPROACH_STEPS } from "@/app/data/approachSteps";

export function ApproachSection() {
  return (
    <section className="py-20 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <SectionHeading className="mb-8">Approach</SectionHeading>
          <p className="text-3xl lg:text-4xl font-light leading-relaxed text-black/80">
            Every project starts with understanding your goals. I focus on creating
            solutions that are not just visually appealing, but also functional,
            maintainable, and scalable.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {APPROACH_STEPS.map((step) => (
            <ApproachStepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
