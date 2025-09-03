"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Imovel } from "../../../lib/types";
import CarouselIndicators from "../../components/shared/CarouselIndicators";

interface CarouselProps {
  properties: Imovel[];
}

const formatPrice = (price: number, type: string) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
  return type === "Aluguel" ? `${formattedPrice}/mês` : formattedPrice;
};

const FeaturedPropertiesCarousel: React.FC<CarouselProps> = ({
  properties,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!properties || properties.length === 0) {
    return (
      <p className="text-center text-brand-secondary py-8">
        Nenhum imóvel em destaque no momento.
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
    if (newIndex >= 0 && newIndex < properties.length) {
      scrollToItem(newIndex);
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 py-4"
      >
        {properties.map((prop) => (
          <Link
            href={`/imovel/${prop.codigo}`}
            key={prop.id}
            className="snap-center flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
          >
            <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
              <Image
                src={prop.imagem_url}
                alt={`Imóvel ${prop.codigo}`}
                width={800}
                height={600}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Ver Detalhes
                </div>
              </div>
              <span
                className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold rounded-full text-white ${
                  prop.tipo_anuncio === "Venda"
                    ? "bg-brand-accent"
                    : "bg-brand-primary"
                }`}
              >
                {prop.tipo_anuncio}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-sm font-mono">{prop.codigo}</p>
                <h3 className="text-xl font-bold">
                  {formatPrice(prop.preco, prop.tipo_anuncio)}
                </h3>
                {prop.corretores && prop.corretores.length > 0 && (
                  <div className="flex items-center gap-2 mt-2">
                    <Image
                      src={prop.corretores[0].avatar_url}
                      alt={prop.corretores[0].nome}
                      width={24}
                      height={24}
                      className="rounded-full border-2 border-white"
                    />
                    <span className="text-xs font-medium">
                      {prop.corretores[0].nome}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Link>
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
        count={properties.length}
        activeIndex={activeIndex}
        onIndicatorClick={scrollToItem}
      />
    </div>
  );
};

export default FeaturedPropertiesCarousel;
