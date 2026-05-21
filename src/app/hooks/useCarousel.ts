import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type UseCarouselOptions = {
  readonly autoplayDelay?: number;
};

type UseCarouselReturn = {
  readonly emblaRef: ReturnType<typeof useEmblaCarousel>[0];
  readonly selectedIndex: number;
  readonly scrollTo: (index: number) => void;
  readonly scrollNext: () => void;
};

export function useCarousel({
  autoplayDelay = 10_000,
}: UseCarouselOptions = {}): UseCarouselReturn {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 20 },
    [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return { emblaRef, selectedIndex, scrollTo, scrollNext };
}
