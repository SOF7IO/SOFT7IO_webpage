import { useSenjaScript } from "@/app/hooks/useSenjaScript";

type SenjaEmbedProps = {
  readonly widgetId: string;
  readonly className?: string;
};

export function SenjaEmbed({ widgetId, className }: SenjaEmbedProps) {
  useSenjaScript();

  return (
    <div
      className={className ? `senja-embed ${className}` : "senja-embed"}
      data-id={widgetId}
      data-mode="shadow"
      data-lazyload="true"
    />
  );
}
