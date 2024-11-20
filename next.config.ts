/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  distDir: "docs", // Diretório de saída para build
  basePath: "/docs",
  assetPrefix: "/docs",
  trailingSlash: true, // Adiciona barra ao final das URLs
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
};
