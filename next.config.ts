/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  distDir: "out",
  basePath: "",
  assetPrefix: "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
