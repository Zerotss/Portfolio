import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
    images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    if (!images.length) return null;

    return (
        <div className="relative w-full">
            <div
                ref={emblaRef}
                className="overflow-hidden px-[15.5%]" 
            >
                <div className="flex">
                    {images.map((src, index) => {
                        const isActive = index === selectedIndex;

                        return (
                            <div
                                key={index}
                                className="flex-[0_0_80%]"
                            >
                                <div
                                    className={`
                                    relative overflow-hidden rounded-2xl
                                    transition-all duration-500
                                    ${isActive
                                            ? "scale-100 opacity-100 shadow-2xl"
                                            : "scale-95 opacity-60"}
                                `}
                                >
                                    <div className="relative w-full aspect-[16/9]">
                                        <img
                                            src={src}
                                            alt={`Slide ${index + 1}`}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <button
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
        </div>
    );
}
