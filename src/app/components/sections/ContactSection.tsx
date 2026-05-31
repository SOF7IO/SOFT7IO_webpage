import { FadeIn } from "@/app/components/common/FadeIn";
import { SectionHeading } from "@/app/components/common/SectionHeading";

const CONTACT_EMAIL = "hello@sof7.io";
const CONTACT_PHONE = "+48 786 239 026";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="max-w-3xl">
          <SectionHeading className="mb-8">Let's work together</SectionHeading>
          <h3 className="text-4xl lg:text-5xl font-light mb-8">
            Have a project in mind?
            <br />
            <span className="text-[#2ecc71]">Let's make it happen.</span>
          </h3>
          <div className="space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-block text-xl text-black/60 hover:text-black transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          
          </div>
          <div className="space-y-4">
          <a
              href={`tel:${CONTACT_PHONE}`}
              className="inline-block text-xl text-black/60 hover:text-black transition-colors"
            >
              {CONTACT_PHONE}
            </a>
          
          </div>
          
        </FadeIn>
      </div>
    </section>
  );
}
