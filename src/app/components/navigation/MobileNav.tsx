import { NavLink } from "@/app/components/common/NavLink";
import type { NavLink as NavLinkType } from "@/app/types";

type MobileNavProps = {
  readonly links: readonly NavLinkType[];
  readonly onLinkClick: () => void;
};

export function MobileNav({ links, onLinkClick }: MobileNavProps) {
  return (
    <div className="md:hidden bg-white border-t border-black/5">
      <div className="px-6 py-4 space-y-3">
        {links.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            variant="mobile"
            onClick={onLinkClick}
          />
        ))}
      </div>
    </div>
  );
}
