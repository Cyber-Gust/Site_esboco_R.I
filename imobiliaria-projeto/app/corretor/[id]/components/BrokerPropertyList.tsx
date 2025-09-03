import { Imovel } from "../../../../lib/types";
import PropertyCard from "../../../components/shared/PropertyCard";

interface ListProps {
  imoveis: Imovel[];
}

const BrokerPropertyList: React.FC<ListProps> = ({ imoveis }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-brand-text border-b pb-4 mb-8">
        Imóveis sob minha gestão ({imoveis.length})
      </h2>
      {imoveis.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imoveis.map((imovel) => (
            <PropertyCard key={imovel.id} imovel={imovel} />
          ))}
        </div>
      ) : (
        <p className="text-center text-brand-secondary py-16">
          Este corretor não possui imóveis cadastrados no momento.
        </p>
      )}
    </div>
  );
};

export default BrokerPropertyList;
