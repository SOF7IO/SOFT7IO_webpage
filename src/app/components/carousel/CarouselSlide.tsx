type CarouselSlideProps = {
  readonly src: string;
  readonly index: number;
};

export function CarouselSlide({ src, index }: CarouselSlideProps) {
  return (
    <div className="flex-[0_0_100%] min-w-0 relative">
      <img
        src={src}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
