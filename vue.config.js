module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.VUE_APP_BUILD_MODE === 'pages'
    ? '/ecotec-landing/'
    : '/'
}