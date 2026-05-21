import { CtaButton } from "@/app/components/common/CtaButton";

export function HeroContent() {
  return (
    <>
      <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-6">
        Building digital
        <br />
        <span className="text-[#2ecc71]">experiences</span>
      </h1>
      <p className="text-xl text-black/60 leading-relaxed">
        Crafting modern websites and mobile applications with attention to detail,
        performance, and user experience.
      </p>
      <CtaButton href="#contact" label="Let's talk" />
    </>
  );
}
