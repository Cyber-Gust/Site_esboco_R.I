/** @type {import('next').NextConfig} */
const nextConfig = {
  // A configuração de imagens é adicionada aqui.
  images: {
    // Lista de domínios permitidos para as imagens.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
