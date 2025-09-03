import SectionTitle from './SectionTitle';
import { supabase } from '../../../lib/supabaseClient';
import { Corretor } from '../../../lib/types';
import BrokersCarousel from './BrokersCarousel';

async function getBrokers() {
  const { data, error } = await supabase
    .from('corretores')
    .select('*');

  if (error) {
    console.error('Erro ao buscar corretores:', error.message);
    return [];
  }
  return data as Corretor[];
}

const Brokers = async () => {
  const brokers = await getBrokers();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Conheça Nossa Equipe" subtitle="Profissionais dedicados a realizar o seu sonho" />
        <BrokersCarousel brokers={brokers} />
      </div>
    </section>
  );
};

export default Brokers;
