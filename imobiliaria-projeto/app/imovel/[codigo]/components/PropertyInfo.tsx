import { BedDouble, Bath, Car, Ruler, Building, Info } from "lucide-react";
import { Corretor, Imovel } from "../../../../lib/types";

interface InfoProps {
  property: Imovel;
}

const DetailItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string | number | null | undefined;
}> = ({ icon, label, value }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg text-center">
    <div className="text-brand-primary mb-2">{icon}</div>
    <span className="text-sm text-gray-500">{label}</span>
    <span className="font-bold text-lg text-brand-text">
      {value || "-"}
    </span>
  </div>
);

const PropertyInfo: React.FC<InfoProps> = ({ property }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-brand-text border-b pb-4 mb-6 flex items-center">
        <Info size={24} className="mr-3 text-brand-primary" />
        Detalhes do Imóvel
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <DetailItem
          icon={<BedDouble />}
          label="Quartos"
          value={property.quartos}
        />
        <DetailItem
          icon={<Bath />}
          label="Banheiros"
          value={property.banheiros}
        />
        <DetailItem
          icon={<Car />}
          label="Vagas"
          value={property.vagas_garagem}
        />
        <DetailItem
          icon={<Ruler />}
          label="Área (m²)"
          value={property.area_m2}
        />
      </div>

      <div className="prose max-w-none text-gray-600">
        <p>{property.descricao}</p>
      </div>

      {/* Seção de detalhes do condomínio (exemplo) */}
      {/* Você pode adicionar campos no Supabase para isso */}
      <h3 className="text-2xl font-bold text-brand-text border-b pb-4 mt-8 mb-6 flex items-center">
        <Building size={24} className="mr-3 text-brand-primary" />
        Detalhes do Condomínio
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>Portaria 24 horas</li>
        <li>Piscina aquecida</li>
        <li>Academia completa</li>
        <li>Salão de festas gourmet</li>
        <li>Playground e brinquedoteca</li>
      </ul>
    </div>
  );
};

export default PropertyInfo;
