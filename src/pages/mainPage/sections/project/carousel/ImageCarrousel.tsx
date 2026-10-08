import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  initialIndex?: number;
  expanded?: boolean;
  onImageClick?: (index: number) => void;
}

export default function ImageCarousel({ images, initialIndex = 0, expanded = false, onImageClick }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    startIndex: initialIndex,
  });

  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

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

  useEffect(() => {
    if (!expanded || !emblaApi) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        if (event.key === "ArrowLeft") emblaApi.scrollPrev();
        else emblaApi.scrollNext();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [expanded, emblaApi]);

  // Una sola imagen mantiene la vista compacta del drawer.
  if (!images.length) return null;
  if (images.length === 1 && !expanded) {
    return (
        <div className="flex justify-center w-full">
          <button type="button" onClick={() => onImageClick?.(0)} aria-label="Enlarge image 1" className="relative w-[55%] aspect-[16/9] rounded-2xl overflow-hidden cursor-zoom-in focus-visible:outline-2 focus-visible:outline-cyan-700 focus-visible:outline-offset-4">
            <img
              src={images[0]}
              alt="Single Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        </div>
      );
  }

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative w-full">
      <div ref={emblaRef} className={expanded ? "overflow-hidden" : "overflow-hidden px-[15.5%]"}>
        <div className="flex">
          {images.map((src, index) => {
            const isActive = index === selectedIndex;

            return (
              <div key={index} className={expanded ? "min-w-0 flex-[0_0_100%]" : "flex-[0_0_80%]"}>
                <div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                    isActive || expanded
                      ? "scale-100 opacity-100 shadow-2xl"
                      : "scale-95 opacity-60"
                  }`}
                >
                  {expanded ? (
                    <img src={src} alt={`Slide ${index + 1}`} draggable={false} className="h-[65dvh] w-full object-contain select-none" />
                  ) : (
                  <button type="button" onClick={() => onImageClick?.(index)} aria-label={`Enlarge image ${index + 1}`} className="relative block w-full aspect-[16/9] cursor-zoom-in focus-visible:outline-2 focus-visible:outline-cyan-700 focus-visible:-outline-offset-2">
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      draggable={false}
                    />
                  </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Botones solo si hay más de una imagen */}
      {images.length > 1 && <>
      <button
        type="button"
        aria-label="Previous image"
        onClick={scrollPrev}
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          rounded-full p-3
          backdrop-blur-md
          bg-cyan-100/60
          border border-cyan-200/40
          text-cyan-700
          transition-all duration-300
          hover:bg-cyan-700/80
          hover:text-white
          cursor-pointer
          shadow-lg
        "
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        aria-label="Next image"
        onClick={scrollNext}
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          rounded-full p-3
          backdrop-blur-md
          bg-cyan-100/60
          border border-cyan-200/40
          text-cyan-700
          transition-all duration-300
          hover:bg-cyan-700/80
          hover:text-white
          cursor-pointer
          shadow-lg
        "
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      </>}
      {expanded && <p className="mt-4 text-center text-sm text-white/80" aria-live="polite" aria-atomic="true">{selectedIndex + 1} / {images.length}</p>}
    </div>
  );
}
