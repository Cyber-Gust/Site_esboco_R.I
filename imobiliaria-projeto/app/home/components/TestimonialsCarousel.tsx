"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { Depoimento } from "../../../lib/types";
import CarouselIndicators from "../../components/shared/CarouselIndicators";

interface CarouselProps {
  testimonials: Depoimento[];
}

const TestimonialsCarousel: React.FC<CarouselProps> = ({ testimonials }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return (
      <p className="text-center text-brand-secondary py-8">
        Nenhum depoimento disponível no momento.
      </p>
    );
  }

  const scrollToItem = (index: number) => {
    if (!scrollContainerRef.current) return;
    const card = scrollContainerRef.current.children[index];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveIndex(index);
    }
  };

  const scroll = (direction: "left" | "right") => {
    const newIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    if (newIndex >= 0 && newIndex < testimonials.length) {
      scrollToItem(newIndex);
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 py-4"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="snap-center flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar_url}
                  alt={testimonial.nome_cliente}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-brand-text">
                    {testimonial.nome_cliente}
                  </h4>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-brand-secondary flex-grow">
                &quot;{testimonial.texto_depoimento}&quot;
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-10 hidden md:block"
      >
        <ChevronLeft className="h-6 w-6 text-brand-primary" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-10 hidden md:block"
      >
        <ChevronRight className="h-6 w-6 text-brand-primary" />
      </button>
      <CarouselIndicators
        count={testimonials.length}
        activeIndex={activeIndex}
        onIndicatorClick={scrollToItem}
      />
    </div>
  );
};

export default TestimonialsCarousel;
