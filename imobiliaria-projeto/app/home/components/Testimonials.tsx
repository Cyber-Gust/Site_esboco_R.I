import SectionTitle from './SectionTitle';
import { supabase } from '../../../lib/supabaseClient';
import { Depoimento } from '../../../lib/types';
import TestimonialsCarousel from './TestimonialsCarousel';

async function getTestimonials() {
  const { data, error } = await supabase
    .from('depoimentos')
    .select('*')
    .limit(5);

  if (error) {
    console.error('Erro ao buscar depoimentos:', error.message);
    return [];
  }
  return data as Depoimento[];
}

const Testimonials = async () => {
  const testimonials = await getTestimonials();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="O que nossos clientes dizem" subtitle="A satisfação de quem confia em nosso trabalho" />
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
