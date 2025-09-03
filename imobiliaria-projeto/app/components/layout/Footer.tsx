import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-text text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Coluna 1: Logo e Descrição */}
          <div>
            <h3 className="text-2xl font-bold">Logo Imobiliária</h3>
            <p className="mt-4 text-gray-400 text-sm">
              Realizando sonhos e construindo histórias. Encontre o imóvel ideal com a nossa ajuda.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li><Link href="/comprar" className="text-gray-400 hover:text-white text-sm">Comprar</Link></li>
              <li><Link href="/alugar" className="text-gray-400 hover:text-white text-sm">Alugar</Link></li>
              <li><Link href="/lancamentos" className="text-gray-400 hover:text-white text-sm">Lançamentos</Link></li>
              <li><Link href="/corretores" className="text-gray-400 hover:text-white text-sm">Nossa Equipe</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Links Adicionais */}
          <div>
            <h4 className="font-bold text-lg mb-4">Institucional</h4>
            <ul className="space-y-3">
              <li><Link href="/sobre" className="text-gray-400 hover:text-white text-sm">Sobre Nós</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-white text-sm">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <address className="not-italic text-gray-400 text-sm space-y-3">
              <p>Rua Exemplo, 123, Bairro, Cidade - UF</p>
              <p>Email: contato@imobiliaria.com</p>
              <p>Telefone: (00) 1234-5678</p>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Portal Imobiliário. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
