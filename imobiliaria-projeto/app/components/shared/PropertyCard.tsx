import Link from "next/link";
import Image from "next/image";
import { Imovel } from "../../../lib/types";
import { BedDouble, Bath, Car, Ruler } from "lucide-react";

interface CardProps {
  imovel: Imovel;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const PropertyCard: React.FC<CardProps> = ({ imovel }) => {
  return (
    <Link href={`/imovel/${imovel.codigo}`} className="group block h-full">
      <div className="relative overflow-hidden rounded-xl shadow-lg h-full flex flex-col bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="relative">
          <Image
            src={imovel.imagem_url}
            alt={imovel.nome || "Imóvel"}
            width={800}
            height={600}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold rounded-full text-white ${
              imovel.tipo_anuncio === "Venda"
                ? "bg-brand-accent"
                : "bg-brand-primary"
            }`}
          >
            {imovel.tipo_anuncio}
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-brand-text leading-tight">
            {imovel.nome || `Imóvel em ótima localização`}
          </h3>
          <p className="text-sm text-brand-secondary mt-1 font-mono">
            {imovel.codigo}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 my-4">
            <div className="flex items-center gap-2">
              <BedDouble size={18} /> {imovel.quartos || "-"} Quarto(s)
            </div>
            <div className="flex items-center gap-2">
              <Bath size={18} /> {imovel.banheiros || "-"} Banheiro(s)
            </div>
            <div className="flex items-center gap-2">
              <Car size={18} /> {imovel.vagas_garagem || "-"} Vaga(s)
            </div>
            <div className="flex items-center gap-2">
              <Ruler size={18} /> {imovel.area_m2 || "-"} m²
            </div>
          </div>

          <p className="text-2xl font-bold text-brand-primary mt-auto pt-4">
            {formatPrice(imovel.preco)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
