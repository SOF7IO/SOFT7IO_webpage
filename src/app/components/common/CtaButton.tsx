import { ArrowRight } from "lucide-react";

type CtaButtonProps = {
  readonly href: string;
  readonly label: string;
};

export function CtaButton({ href, label }: CtaButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-colors"
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}
