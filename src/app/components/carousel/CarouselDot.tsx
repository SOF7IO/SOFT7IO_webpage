type CarouselDotProps = {
  readonly index: number;
  readonly isActive: boolean;
  readonly onClick: () => void;
};

export function CarouselDot({ index, isActive, onClick }: CarouselDotProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-2 h-2 rounded-full transition-all ${
        isActive ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
      }`}
      aria-label={`Go to slide ${index + 1}`}
      aria-current={isActive ? "true" : undefined}
    />
  );
}
