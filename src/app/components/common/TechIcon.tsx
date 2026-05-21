import type { Technology } from "@/app/types";

type TechIconProps = {
  readonly technology: Technology;
};

export function TechIcon({ technology }: TechIconProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`w-16 h-16 rounded-2xl ${technology.bgClassName} flex items-center justify-center p-3`}
      >
        <img
          src={technology.iconUrl}
          alt={technology.iconAlt}
          className="w-full h-full"
        />
      </div>
      <span className="text-sm text-black/60">{technology.name}</span>
    </div>
  );
}
