import type { ApproachStep } from "@/app/types";

type ApproachStepCardProps = {
  readonly step: ApproachStep;
};

export function ApproachStepCard({ step }: ApproachStepCardProps) {
  return (
    <div className="p-8 bg-white rounded-2xl border border-black/5">
      <div className="text-4xl mb-4">{step.number}</div>
      <h4 className="mb-3">{step.title}</h4>
      <p className="text-sm text-black/60 leading-relaxed">{step.description}</p>
    </div>
  );
}
