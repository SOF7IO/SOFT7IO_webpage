import { FadeIn } from "@/app/components/common/FadeIn";
import { SectionHeading } from "@/app/components/common/SectionHeading";
import { ServiceCard } from "@/app/components/common/ServiceCard";
import { SERVICES } from "@/app/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeading>What I do</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
