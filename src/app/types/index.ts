import type { LucideIcon } from "lucide-react";

export type NavLink = {
  readonly href: string;
  readonly label: string;
};

export type Service = {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
};

export type ApproachStep = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
};

export type Technology = {
  readonly name: string;
  readonly iconUrl: string;
  readonly iconAlt: string;
  readonly bgClassName: string;
};
