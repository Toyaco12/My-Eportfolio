const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'My ePortfolio' // Change le titre ici si nécessaire
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/My-Eportfolio/' // Change 'nom-du-repo' par le nom de ton dépôt GitHub
    : '/'
})
