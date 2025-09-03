import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header"; // Importando o Header
import Footer from "./components/layout/Footer"; // Importando o Footer (será criado depois)

// A fonte Inter é uma ótima escolha para um design clean e moderno, similar ao de grandes empresas de tecnologia.
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal Imobiliário | Encontre seu Imóvel dos Sonhos",
  description: "Plataforma moderna para compra e aluguel de imóveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-brand-background text-brand-text`}>
        {/* O Header será exibido em todas as páginas */}
        <Header />
        <main>
          {/* O conteúdo de cada página será renderizado aqui */}
          {children}
        </main>
        {/* O Footer também será exibido em todas as páginas */}
        { <Footer />}
      </body>
    </html>
  );
}
