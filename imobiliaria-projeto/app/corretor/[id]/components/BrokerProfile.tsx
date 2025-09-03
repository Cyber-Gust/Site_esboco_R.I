import Image from "next/image";
import { Corretor } from "../../../../lib/types";
import { Mail, MessageSquare, Phone } from "lucide-react";

interface ProfileProps {
  corretor: Corretor;
}

const BrokerProfile: React.FC<ProfileProps> = ({ corretor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src={corretor.avatar_url}
            alt={corretor.nome}
            width={180}
            height={180}
            className="rounded-full border-4 border-brand-primary shadow-md"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-brand-text">
            {corretor.nome}
          </h1>
          <p className="text-lg text-brand-secondary mt-1">{corretor.cargo}</p>
          <p className="text-sm text-gray-400 mt-1">CRECI: {corretor.creci}</p>
          <p className="mt-4 text-gray-600 max-w-2xl">
            {/* Biografia de exemplo. Você pode adicionar um campo 'bio' no Supabase. */}
            Especialista com mais de 10 anos de experiência no mercado
            imobiliário, dedicado a encontrar as melhores oportunidades para
            meus clientes, oferecendo um serviço transparente e personalizado.
          </p>
          <div className="flex justify-center md:justify-start gap-3 mt-6">
            <button className="flex items-center gap-2 bg-brand-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">
              <MessageSquare size={18} /> WhatsApp
            </button>
            <button className="flex items-center gap-2 bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
              <Mail size={18} /> Enviar E-mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerProfile;
