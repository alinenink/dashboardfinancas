const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProduction ? '/alineninkfinancas.github.io' : '',
  assetPrefix: isProduction ? '/alineninkfinancas.github.io' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
