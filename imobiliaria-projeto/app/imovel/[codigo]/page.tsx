import { supabase } from "../../../lib/supabaseClient";
import { Imovel } from "../../../lib/types";
import { notFound } from "next/navigation";

import PropertyHeader from "./components/PropertyHeader";
import ImageGallery from "./components/ImageGallery";
import PropertyInfo from "./components/PropertyInfo";
import ContactCard from "./components/ContactCard";

// Função para buscar um único imóvel pelo código
async function getPropertyByCode(code: string): Promise<Imovel | null> {
  const { data, error } = await supabase
    .from("imoveis")
    .select(
      `
      *,
      corretores (*)
    `
    )
    .eq("codigo", code)
    .single(); // .single() garante que esperamos apenas um resultado

  if (error || !data) {
    console.error("Erro ao buscar imóvel:", error?.message);
    return null;
  }

  return data as Imovel;
}

// A página é um Componente de Servidor que busca os dados
export default async function PropertyPage({ params }: { params: { codigo: string } }) {
  const property = await getPropertyByCode(params.codigo);

  // Se o imóvel não for encontrado, exibe uma página 404
  if (!property) {
    notFound();
  }

  const corretor =
    property.corretores && property.corretores.length > 0
      ? property.corretores[0]
      : null;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <PropertyHeader property={property} />
        <ImageGallery property={property} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Coluna da Esquerda: Detalhes */}
          <div className="lg:col-span-2">
            <PropertyInfo property={property} />
          </div>

          {/* Coluna da Direita: Contato */}
          <div className="lg:col-span-1">
            <ContactCard corretor={corretor} propertyCode={property.codigo} />
          </div>
        </div>

        {/* Aqui entrarão os imóveis similares e o blog no futuro */}
      </div>
    </div>
  );
}
