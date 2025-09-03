'use client'; // Necessário para usar hooks como o useState

import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react'; // Ícones modernos e leves
import Link from 'next/link';

const Header = () => {
  // Estado para controlar a abertura e fechamento do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/comprar', label: 'Comprar' },
    { href: '/alugar', label: 'Alugar' },
    { href: '/lancamentos', label: 'Lançamentos' },
    { href: '/corretores', label: 'Nossos Corretores' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-brand-background/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo e Slogan */}
            <Link href="/" className="flex items-center gap-4">
              <span className="text-2xl font-bold text-brand-primary">Logo</span>
              <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
              <span className="text-sm text-brand-secondary hidden sm:block">Seu imóvel dos sonhos está aqui.</span>
            </Link>

            {/* Navegação para Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Ícones da Direita e Menu Sanduíche */}
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              
              {/* Botão do Menu Sanduíche para telas menores que lg */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors lg:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile (Overlay) */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl transition-transform transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do menu o feche
        >
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-bold text-lg text-brand-primary">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-md text-gray-700 font-medium hover:bg-gray-100 hover:text-brand-primary transition-colors"
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
