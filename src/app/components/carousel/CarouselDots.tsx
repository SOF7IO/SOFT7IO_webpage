import { CarouselDot } from "@/app/components/carousel/CarouselDot";

type CarouselDotsProps = {
  readonly slideCount: number;
  readonly selectedIndex: number;
  readonly onDotClick: (index: number) => void;
};

export function CarouselDots({ slideCount, selectedIndex, onDotClick }: CarouselDotsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: slideCount }, (_, index) => (
        <CarouselDot
          key={index}
          index={index}
          isActive={index === selectedIndex}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
}
