const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: 'index.js'
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            }
        ]
    },

    externalsPresets: { node: true },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
