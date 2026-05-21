import type { Technology } from "@/app/types";

export const TECHNOLOGIES: readonly Technology[] = [
  { name: "React", iconUrl: "https://cdn.simpleicons.org/react/61dafb", iconAlt: "React", bgClassName: "bg-[#61dafb]/10" },
  { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript/3178c6", iconAlt: "TypeScript", bgClassName: "bg-[#3178c6]/10" },
  { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/68a063", iconAlt: "Node.js", bgClassName: "bg-[#68a063]/10" },
  { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/000000", iconAlt: "Next.js", bgClassName: "bg-black/5" },
  { name: "Tailwind", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06b6d4", iconAlt: "Tailwind CSS", bgClassName: "bg-[#06b6d4]/10" },
  { name: "PostgreSQL", iconUrl: "https://cdn.simpleicons.org/postgresql/336791", iconAlt: "PostgreSQL", bgClassName: "bg-[#336791]/10" },
  { name: "GCP", iconUrl: "https://cdn.simpleicons.org/googlecloud/4285f4", iconAlt: "Google Cloud", bgClassName: "bg-[#4285f4]/10" },
  { name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker/2496ed", iconAlt: "Docker", bgClassName: "bg-[#2496ed]/10" },
  { name: "Git", iconUrl: "https://cdn.simpleicons.org/git/f05032", iconAlt: "Git", bgClassName: "bg-[#f05032]/10" },
  { name: "Astro", iconUrl: "https://cdn.simpleicons.org/astro/BC52EE", iconAlt: "Astro", bgClassName: "bg-[#BC52EE]/10" },
  { name: "Supabase", iconUrl: "https://cdn.simpleicons.org/supabase/3ECF8E", iconAlt: "Supabase", bgClassName: "bg-[#3ECF8E]/10" },
  { name: "Strapi", iconUrl: "https://cdn.simpleicons.org/strapi/4945FF", iconAlt: "Strapi", bgClassName: "bg-[#4945FF]/10" },
  { name: "React Native", iconUrl: "https://cdn.simpleicons.org/react/61dafb", iconAlt: "React Native", bgClassName: "bg-[#61dafb]/10" },
] as const;
