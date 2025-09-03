"use client";
import { MapPin } from "lucide-react";

const MapBanner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Container principal com overflow-hidden para "cortar" os elementos que se movem */}
        <div className="group relative h-48 w-full rounded-2xl overflow-hidden cursor-pointer bg-gray-100">
          {/* Container interno para os painéis deslizantes */}
          <div className="absolute inset-0 flex">
            {/* Lado Esquerdo: Gradiente e Texto */}
            {/* Animação de translação para a direita, fazendo-o "recolher" para o centro */}
            <div className="h-full w-1/2 bg-gradient-to-r from-brand-primary to-blue-400 flex items-center justify-center p-8 transition-all duration-500 ease-out group-hover:translate-x-[51%]">
              <h3 className="text-3xl font-bold text-white text-center transition-opacity duration-300 group-hover:opacity-0">
                Busque e visualize imóveis no mapa
              </h3>
            </div>

            {/* Lado Direito: Imagem do Mapa */}
            {/* Animação de translação para a esquerda, fazendo-o "recolher" para o centro */}
            <div className="h-full w-1/2 transition-all duration-500 ease-out group-hover:-translate-x-[51%]">
              <img
                src="https://www.showmetech.com.br/wp-content/uploads/2022/03/mapa-google-maps-1920x1024.jpg"
                alt="Mapa da cidade"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/800x400/e2e8f0/64748b?text=Mapa";
                }}
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>

          {/* Ícone Central do Pin */}
          {/* O pino fica em uma camada superior (z-10) e não é afetado pela translação */}
          <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-[15%] flex items-center justify-center w-28 h-28 transition-transform duration-500 ease-out group-hover:scale-125">
            <div className="w-full h-full bg-white rounded-full shadow-2xl flex items-center justify-center">
              <MapPin
                className="h-14 w-14 text-brand-primary"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapBanner;
