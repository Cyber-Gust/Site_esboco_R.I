"use client";

import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Heart,
  BedDouble,
  Bath,
  Car,
  Ruler,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Imovel } from "../../../lib/types";
import CarouselIndicators from "../../components/shared/CarouselIndicators";

interface CarouselProps {
  launches: Imovel[];
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const NewLaunchesCarousel: React.FC<CarouselProps> = ({ launches }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!launches || launches.length === 0) {
    return (
      <p className="text-center text-brand-secondary py-8">
        Nenhum lançamento disponível no momento.
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
    if (newIndex >= 0 && newIndex < launches.length) {
      scrollToItem(newIndex);
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 py-4"
      >
        {launches.map((launch) => {
          const corretor =
            launch.corretores && launch.corretores.length > 0
              ? launch.corretores[0]
              : null;

          return (
            <Link
              href={`/imovel/${launch.codigo}`}
              key={launch.id}
              className="snap-center flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
            >
              <div className="group relative h-full">
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-md">
                    <Share2 className="h-5 w-5 text-gray-700" />
                  </button>
                  <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-md">
                    <Heart className="h-5 w-5 text-gray-700" />
                  </button>
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg h-full flex flex-col">
                  <div className="relative">
                    <Image
                      src={launch.imagem_url}
                      alt={launch.nome || "Lançamento"}
                      width={800}
                      height={600}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                      {corretor && (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Image
                            src={corretor.avatar_url}
                            alt={corretor.nome}
                            width={64}
                            height={64}
                            className="rounded-full border-4 border-white mb-4"
                          />
                          <p className="font-bold text-lg">
                            Clique para visualizar
                          </p>
                          <p className="text-sm">
                            Corretor(a): {corretor.nome}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-brand-text">
                      {launch.nome}
                    </h3>
                    <p className="text-sm text-brand-secondary mt-1 font-mono">
                      {launch.codigo}
                    </p>
                    <p className="text-md text-gray-600 my-4 h-10">
                      {launch.descricao}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 border-t border-b py-3">
                      <div className="flex items-center gap-2">
                        <BedDouble size={18} /> {launch.quartos || "-"} Qts
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath size={18} /> {launch.banheiros || "-"} Ban
                      </div>
                      <div className="flex items-center gap-2">
                        <Car size={18} /> {launch.vagas_garagem || "-"} Vgs
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler size={18} /> {launch.area_m2 || "-"} m²
                      </div>
                    </div>

                    <p className="text-2xl font-bold text-brand-primary mt-auto pt-4">
                      {formatPrice(launch.preco)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
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
        count={launches.length}
        activeIndex={activeIndex}
        onIndicatorClick={scrollToItem}
      />
    </div>
  );
};

export default NewLaunchesCarousel;
