/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  distDir: "out",
  basePath: isProd ? "/alineninkfinancas.github.io" : "",
  assetPrefix: isProd ? "/alineninkfinancas.github.io" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
