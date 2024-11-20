/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  output: 'export',
  distDir: 'out', // Diretório de saída para build
  basePath: isProduction ? "/alineninkfinancas.github.io/docs" : "/out",
  assetPrefix: isProduction ? "/alineninkfinancas.github.io/docs" : "/out",
  trailingSlash: true, // Adiciona barra ao final das URLs
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
};
