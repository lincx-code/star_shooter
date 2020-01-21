module.exports = {
    entry: "/workspace_React/jsx/star_shooter/src/index.js",
    output: {
        path: '/workspace_React/jsx/star_shooter/dist/assets',
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node-modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react', {
                        'plugins': ['@babel/plugin-proposal-class-properties']
                    }]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: ()=> [require('autoprefixer')]
                    }
                }]
            },
            {
                test: /\.scss/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }}, 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        encoding: 'base64'
                    }
                }
            }
        ]
    }
}