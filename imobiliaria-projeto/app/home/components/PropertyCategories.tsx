"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  Building,
  PawPrint,
  TrendingUp,
  Gem,
  Wrench,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import CarouselIndicators from "../../components/shared/CarouselIndicators";

const categories = [
  { name: "Investimento", icon: <TrendingUp /> },
  { name: "Aceita Pet", icon: <PawPrint /> },
  { name: "Alto Padrão", icon: <Gem /> },
  { name: "Lançamentos", icon: <Building /> },
  { name: "Para reformar", icon: <Wrench /> },
  { name: "Novos", icon: <TrendingUp /> },
  { name: "Comercial", icon: <PawPrint /> },
  { name: "Luxo", icon: <Gem /> },
];

const PropertyCategories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemWidthRef = useRef(0);
  const isScrolling = useRef(false);

  const handleScroll = useCallback(() => {
    if (isScrolling.current || !scrollContainerRef.current) return;
    const { scrollLeft, children } = scrollContainerRef.current;
    const cardWidth = children[0]?.clientWidth || 0;
    const gap = 32; // Corresponde a 'gap-8'
    const effectiveCardWidth = cardWidth + gap;
    const newIndex = Math.round(scrollLeft / effectiveCardWidth);
    setActiveIndex(newIndex);
  }, []);

  const scrollToItem = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
    const gap = 32;
    const scrollLeft = index * (cardWidth + gap);

    isScrolling.current = true;
    scrollContainerRef.current.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
    setActiveIndex(index);
    setTimeout(() => {
      isScrolling.current = false;
    }, 500); // Tempo para a animação de rolagem
  };

  const scroll = (direction: "left" | "right") => {
    const newIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    if (newIndex >= 0 && newIndex < categories.length) {
      scrollToItem(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Encontre por Categoria"
          subtitle="Filtre os imóveis pelo que mais importa para você"
        />
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 -mx-4 px-4"
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start text-center group w-32"
              >
                <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-105 shadow-sm">
                  <div className="scale-150">{category.icon}</div>
                </div>
                <p className="mt-4 font-semibold text-brand-text">
                  {category.name}
                </p>
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
        </div>
        <CarouselIndicators
          count={categories.length}
          activeIndex={activeIndex}
          onIndicatorClick={scrollToItem}
        />
      </div>
    </section>
  );
};

export default PropertyCategories;
