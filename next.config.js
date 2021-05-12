module.exports = {
    webpack: (config, options) => {
        const isServer = options.isServer;
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static', // 本地硬盘路径
                        publicPath: isServer ? '_next/static' : '_next/static' // 网站路径
                    }
                },
            ]
        })
        return config
    }
}