import { ArrowRight } from "lucide-react";
import type { MouseEvent } from "react";
import { handleAnchorClick } from "@/app/utils/scrollToSection";

type CtaButtonProps = {
  readonly href: string;
  readonly label: string;
};

export function CtaButton({ href, label }: CtaButtonProps) {
  const onLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    handleAnchorClick(event, href);
  };

  return (
    <a
      href={href}
      onClick={onLinkClick}
      className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-colors"
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}
