import { ChevronRight } from "lucide-react";

type CarouselNextButtonProps = {
  readonly onClick: () => void;
};

export function CarouselNextButton({ onClick }: CarouselNextButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg"
      aria-label="Next slide"
    >
      <ChevronRight size={20} className="text-black" />
    </button>
  );
}
