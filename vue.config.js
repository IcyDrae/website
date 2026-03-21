module.exports = {
    parallel: false,
    chainWebpack: config => {
        config.module
            .rule('markdown')
            .test(/\.md$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end();
    },
    configureWebpack: {
        resolve: {
            fallback: {
                fs: false,
            },
        }
    }
};
