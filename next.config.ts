/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  output: 'export', // Configuração obrigatória para exportação estática
  distDir: 'out',
  basePath: isProduction ? "/alineninkfinancas.github.io" : "",
  assetPrefix: isProduction ? "/alineninkfinancas.github.io" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
