import SectionTitle from './SectionTitle';
import { supabase } from '../../../lib/supabaseClient';
import FeaturedPropertiesCarousel from './FeaturedPropertiesCarousel';
import { Imovel } from '../../../lib/types';

async function getFeaturedProperties() {
  const { data, error } = await supabase
    .from('imoveis')
    .select(`
      id,
      codigo,
      tipo_anuncio,
      preco,
      imagem_url,
      corretores (
        nome,
        avatar_url
      )
    `) // O comentário foi removido daqui
    .eq('em_destaque', true)
    .limit(5);

  if (error) {
    console.error('Erro ao buscar imóveis em destaque:', error.message);
    return [];
  }

  return data as Imovel[];
}

const FeaturedProperties = async () => {
  const properties = await getFeaturedProperties();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Imóveis em Destaque" subtitle="As melhores oportunidades selecionadas para você" />
        <FeaturedPropertiesCarousel properties={properties} />
      </div>
    </section>
  );
};

export default FeaturedProperties;
