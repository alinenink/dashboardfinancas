/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'alineninkfinancas.github.io'; // Substitua pelo nome do seu repositório no GitHub

const nextConfig = {
  // Habilita a exportação estática
  output: 'export',

  // Define basePath e assetPrefix apenas em produção
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}` : '',

  // Ajusta URLs estáticas com barra no final
  trailingSlash: true,

  // Redirecionamento (funciona no servidor, mas não no build estático)
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
