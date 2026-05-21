import type { RefCallback } from "react";
import { CarouselSlide } from "@/app/components/carousel/CarouselSlide";

type CarouselViewportProps = {
  readonly emblaRef: RefCallback<HTMLDivElement>;
  readonly images: readonly string[];
};

export function CarouselViewport({ emblaRef, images }: CarouselViewportProps) {
  return (
    <div className="overflow-hidden rounded-3xl h-full" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((src, index) => (
          <CarouselSlide key={index} src={src} index={index} />
        ))}
      </div>
    </div>
  );
}
