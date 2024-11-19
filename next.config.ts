/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // Exportação estática
  basePath: isProduction ? '/alineninkfinancas.github.io' : '', // Caminho base para produção
  assetPrefix: isProduction ? '/alineninkfinancas.github.io' : '', // Prefixo para os recursos
  trailingSlash: true, // Adiciona barra no final das URLs
  images: {
    unoptimized: true, // Desabilita otimização de imagens para exportação estática
  },
};
