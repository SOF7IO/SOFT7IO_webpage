import { FadeIn } from "@/app/components/common/FadeIn";
import { SectionHeading } from "@/app/components/common/SectionHeading";
import { TechIcon } from "@/app/components/common/TechIcon";
import { TECHNOLOGIES } from "@/app/data/technologies";

export function TechStackSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeading>Technologies</SectionHeading>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8">
            {TECHNOLOGIES.map((technology) => (
              <TechIcon key={technology.name} technology={technology} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
