import { supabase } from "../../../lib/supabaseClient";
import { Corretor, Imovel } from "../../../lib/types";
import { notFound } from "next/navigation";
import BrokerProfile from "./components/BrokerProfile";
import BrokerPropertyList from "./components/BrokerPropertyList";

type PageProps = {
  params: {
    id: string;
  };
};

// Função para buscar os dados do corretor e seus imóveis
async function getBrokerData(id: string) {
  // Busca os detalhes do corretor
  const brokerPromise = supabase
    .from("corretores")
    .select("*")
    .eq("id", id)
    .single();

  // Busca os imóveis associados a esse corretor
  const propertiesPromise = supabase
    .from("imoveis")
    .select("*")
    .eq("corretor_id", id);

  // Executa as duas buscas em paralelo para otimizar
  const [brokerResult, propertiesResult] = await Promise.all([
    brokerPromise,
    propertiesPromise,
  ]);

  if (brokerResult.error || !brokerResult.data) {
    console.error("Erro ao buscar corretor:", brokerResult.error?.message);
    return { corretor: null, imoveis: [] };
  }

  if (propertiesResult.error) {
    console.error(
      "Erro ao buscar imóveis do corretor:",
      propertiesResult.error.message
    );
    // Retorna o corretor mesmo que os imóveis falhem
    return { corretor: brokerResult.data, imoveis: [] };
  }

  return {
    corretor: brokerResult.data as Corretor,
    imoveis: propertiesResult.data as Imovel[],
  };
}

export default async function BrokerPage({ params }: PageProps) {
  const { corretor, imoveis } = await getBrokerData(params.id);

  // Se o corretor não for encontrado, exibe a página 404
  if (!corretor) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Componente com o perfil do corretor */}
        <BrokerProfile corretor={corretor} />

        {/* Componente com a lista de imóveis */}
        <BrokerPropertyList imoveis={imoveis} />
      </div>
    </div>
  );
}
