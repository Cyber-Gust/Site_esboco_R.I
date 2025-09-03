"use client";
import Image from "next/image";
import { Corretor } from "../../../../lib/types";
import { Mail, MessageSquare } from "lucide-react";

interface CardProps {
  corretor: Corretor | null;
  propertyCode: string;
}

const ContactCard: React.FC<CardProps> = ({ corretor, propertyCode }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-28">
      {corretor && (
        <div className="text-center">
          <Image
            src={corretor.avatar_url}
            alt={corretor.nome}
            width={120}
            height={120}
            className="rounded-full mx-auto border-4 border-brand-primary"
          />
          <h3 className="text-2xl font-bold mt-4 text-brand-text">
            {corretor.nome}
          </h3>
          <p className="text-brand-secondary">{corretor.cargo}</p>
          <p className="text-sm text-gray-400 mt-1">CRECI: {corretor.creci}</p>
        </div>
      )}

      <h4 className="font-bold text-lg text-center mt-8 mb-4">
        Fale com o corretor
      </h4>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Nome
          </label>
          <input
            type="text"
            id="name"
            placeholder="Seu nome"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Seu e-mail"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Seu telefone"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Mensagem"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
            defaultValue={`Olá, tenho interesse no imóvel de código ${propertyCode}.`}
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-4 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Mail size={18} />
          Enviar Mensagem
        </button>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-brand-accent text-white font-bold py-4 px-4 rounded-lg hover:bg-green-600 transition-colors"
        >
          <MessageSquare size={18} />
          Chamar no WhatsApp
        </button>
      </form>
    </div>
  );
};

export default ContactCard;
