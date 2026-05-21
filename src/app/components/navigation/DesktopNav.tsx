import { NavLink } from "@/app/components/common/NavLink";
import type { NavLink as NavLinkType } from "@/app/types";

type DesktopNavProps = {
  readonly links: readonly NavLinkType[];
};

export function DesktopNav({ links }: DesktopNavProps) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} variant="desktop" />
      ))}
    </div>
  );
}
