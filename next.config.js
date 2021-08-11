const path = require('path')

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets/scss')],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        config.resolve.alias = {
            ...config.resolve.alias,
            '@icon': path.resolve(__dirname, 'assets/icons')
        }
        return config;
    }
}

