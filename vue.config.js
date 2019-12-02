module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
        watchOptions: {
          ignored: ['node_modules'],
          aggregateTimeout: 300,
          poll: 1500
        },
        public: '127.0.0.1' // vagrant machine address
    }
  }
};
