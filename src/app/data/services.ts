import { Globe, Smartphone } from "lucide-react";
import type { Service } from "@/app/types";

export const SERVICES: readonly Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies. From landing pages to complex web platforms, focused on performance, SEO, and user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Clean interfaces, smooth animations, and seamless integration with your existing ecosystem.",
  },
] as const;
