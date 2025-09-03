// Este arquivo ajuda o TypeScript a entender a estrutura dos seus dados do Supabase.

export interface Corretor {
  id: string;
  nome: string;
  cargo: string | null;
  creci: string | null;
  avatar_url: string;
}

export interface Imovel {
  id: string;
  codigo: string;
  tipo_anuncio: string;
  nome: string | null;
  descricao: string | null;
  preco: number;
  imagem_url: string;
  quartos: number | null;
  banheiros: number | null;
  vagas_garagem: number | null;
  area_m2: number | null;
  // CORREÇÃO: Alterado para um array de Corretores para corresponder à resposta da API.
  corretores: Corretor[] | null; 
}

export interface Depoimento {
  id: string;
  nome_cliente: string;
  texto_depoimento: string;
  avatar_url: string;
}
