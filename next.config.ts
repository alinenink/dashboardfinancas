/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // Necessário para exportação estática
  distDir: "out", // Diretório de saída para build
  basePath: "", // Caminho base para servir o app
  assetPrefix: "", // Prefixo de ativos estáticos (compatível com basePath)
  trailingSlash: true, // Adiciona barra ao final das URLs
  images: {
    unoptimized: true, // Necessário para exportação estática (Next.js desabilita otimização automática de imagens)
  },
  reactStrictMode: true, // Boa prática para detectar problemas
  swcMinify: true, // Reduz tamanho do código para produção
};
