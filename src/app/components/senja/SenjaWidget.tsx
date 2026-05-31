import { SenjaEmbed } from "@/app/components/senja/SenjaEmbed";

const SENJA_WIDGET_ID = import.meta.env.VITE_SENJA_WIDGET_ID;

export function SenjaWidget() {
  if (!SENJA_WIDGET_ID) return null;

  return (
    <aside
      className="fixed bottom-4 left-4 z-40 max-w-sm"
      aria-label="Client testimonials"
    >
      <SenjaEmbed widgetId={SENJA_WIDGET_ID} />
    </aside>
  );
}
