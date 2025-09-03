import { ArrowLeft, Tag, Home } from "lucide-react";
import Link from "next/link";
import { Corretor, Imovel } from "../../../../lib/types";

interface HeaderProps {
  property: Imovel;
}

const formatPrice = (price: number, type: string) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
  return type === "Aluguel" ? `${formattedPrice}/mês` : formattedPrice;
};

const PropertyHeader: React.FC<HeaderProps> = ({ property }) => {
  return (
    <header className="mb-8">
      <Link
        href="/"
        className="flex items-center text-sm text-brand-secondary hover:text-brand-primary mb-4"
      >
        <ArrowLeft size={16} className="mr-2" />
        Voltar para a página principal
      </Link>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Home size={16} />
            <span>{property.tipo_anuncio}</span>
            <span className="text-gray-300">|</span>
            <Tag size={16} />
            <span>Código: {property.codigo}</span>
          </div>
          <h1 className="text-4xl font-bold text-brand-text mt-2">
            {property.nome || `Imóvel ${property.codigo}`}
          </h1>
        </div>
        <div className="mt-4 md:mt-0 text-left md:text-right">
          <p className="text-gray-500 text-sm">Valor</p>
          <p className="text-4xl font-bold text-brand-primary">
            {formatPrice(property.preco, property.tipo_anuncio)}
          </p>
        </div>
      </div>
    </header>
  );
};

export default PropertyHeader;
