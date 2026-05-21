import { CarouselDots } from "@/app/components/carousel/CarouselDots";
import { CarouselNextButton } from "@/app/components/carousel/CarouselNextButton";
import { CarouselViewport } from "@/app/components/carousel/CarouselViewport";
import { CAROUSEL_IMAGES } from "@/app/data/carouselImages";
import { useCarousel } from "@/app/hooks/useCarousel";

export function HeroCarousel() {
  const { emblaRef, selectedIndex, scrollTo, scrollNext } = useCarousel();

  return (
    <div className="relative w-full h-full group">
      <CarouselViewport emblaRef={emblaRef} images={CAROUSEL_IMAGES} />
      <CarouselNextButton onClick={scrollNext} />
      <CarouselDots
        slideCount={CAROUSEL_IMAGES.length}
        selectedIndex={selectedIndex}
        onDotClick={scrollTo}
      />
    </div>
  );
}
