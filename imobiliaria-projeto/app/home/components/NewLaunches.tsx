import SectionTitle from './SectionTitle';
import { supabase } from '../../../lib/supabaseClient';
import NewLaunchesCarousel from './NewLaunchesCarousel';
import { Imovel } from '../../../lib/types';

async function getNewLaunches() {
  const { data, error } = await supabase
    .from('imoveis')
    .select(`
      id,
      codigo,
      tipo_anuncio,
      nome,
      descricao,
      preco,
      imagem_url,
      quartos,
      banheiros,
      vagas_garagem,
      area_m2,
      corretores (
        nome,
        avatar_url
      )
    `) // O comentário foi removido daqui
    .eq('lancamento', true)
    .limit(5);

  if (error) {
    console.error('Erro ao buscar lançamentos:', error.message);
    return [];
  }

  return data as Imovel[];
}

const NewLaunches = async () => {
  const launches = await getNewLaunches();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Nossos Lançamentos" subtitle="Projetos inovadores para um novo estilo de vida" />
        <NewLaunchesCarousel launches={launches} />
      </div>
    </section>
  );
};

export default NewLaunches;
