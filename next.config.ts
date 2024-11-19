/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repo = '/alineninkfinancas.github.io';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? repo : '',
  assetPrefix: isGithubPages ? repo : '',
};

module.exports = nextConfig;
