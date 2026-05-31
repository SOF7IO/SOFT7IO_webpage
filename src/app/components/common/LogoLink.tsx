import type { MouseEvent } from "react";
import { Logo } from "@/app/components/common/Logo";
import { handleAnchorClick } from "@/app/utils/scrollToSection";

export function LogoLink() {
  const onLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    handleAnchorClick(event, "#");
  };

  return (
    <a
      href="#"
      onClick={onLinkClick}
      className="text-[#2ecc71] hover:opacity-80 transition-opacity"
    >
      <Logo />
    </a>
  );
}
