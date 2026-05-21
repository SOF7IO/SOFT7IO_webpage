import type { Service } from "@/app/types";

type ServiceCardProps = {
  readonly service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="group">
      <div className="w-12 h-12 rounded-full bg-[#2ecc71]/10 flex items-center justify-center mb-6 group-hover:bg-[#2ecc71]/20 transition-colors">
        <Icon className="text-[#2ecc71]" size={24} />
      </div>
      <h3 className="text-2xl mb-4">{service.title}</h3>
      <p className="text-black/60 leading-relaxed">{service.description}</p>
    </div>
  );
}
