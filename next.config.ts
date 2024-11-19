
const isGithubPages = process.env.NODE_ENV === 'production';

const repo = isGithubPages ? '/alineninkfinancas.github.io' : '';

module.exports = {
  output: 'export',
  basePath: repo, 
  assetPrefix: repo,
};
