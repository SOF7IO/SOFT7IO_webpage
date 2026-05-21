import type { NavLink } from "@/app/types";

export const NAV_LINKS: readonly NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;
