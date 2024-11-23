/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  distDir: "out",
  basePath: isProd ? "/alineinkfinancas.github.io" : "",
  assetPrefix: isProd ? "/alineinkfinancas.github.io" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
