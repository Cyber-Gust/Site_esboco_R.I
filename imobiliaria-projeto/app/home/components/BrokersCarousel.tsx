"use client";

import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Corretor } from "../../../lib/types";
import CarouselIndicators from "../../components/shared/CarouselIndicators";

interface CarouselProps {
  brokers: Corretor[];
}

const BrokersCarousel: React.FC<CarouselProps> = ({ brokers }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!brokers || brokers.length === 0) {
    return (
      <p className="text-center text-brand-secondary py-8">
        Nossa equipe está sendo cadastrada.
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
    if (newIndex >= 0 && newIndex < brokers.length) {
      scrollToItem(newIndex);
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 py-4"
      >
        {brokers.map((broker) => (
          <div
            key={broker.id}
            className="snap-center flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-4"
          >
            <Link href={`/corretor/${broker.id}`} className="block h-full">
              <div className="bg-white text-center p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                <Image
                  src={broker.avatar_url}
                  alt={broker.nome}
                  width={128}
                  height={128}
                  className="rounded-full mx-auto border-4 border-brand-primary"
                />
                <h4 className="font-bold text-xl mt-4 text-brand-text">
                  {broker.nome}
                </h4>
                <p className="text-sm text-brand-secondary">{broker.cargo}</p>
                <p className="text-xs text-gray-400 mt-1">
                  CRECI: {broker.creci}
                </p>
                <div className="flex justify-center gap-3 mt-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    <MessageSquare size={18} />
                  </div>
                  <div className="p-3 bg-gray-100 rounded-full">
                    <Mail size={18} />
                  </div>
                  <div className="p-3 bg-gray-100 rounded-full">
                    <Briefcase size={18} />
                  </div>
                </div>
              </div>
            </Link>
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
        count={brokers.length}
        activeIndex={activeIndex}
        onIndicatorClick={scrollToItem}
      />
    </div>
  );
};

export default BrokersCarousel;
