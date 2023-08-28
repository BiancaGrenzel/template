const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    // Seta o arquivo inicial
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    // Seta qual o arquivo convertido a utilizar
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        // Automaticamente no import de arquivos, não é necessário colocar
        // .js e .jsx no final do arquivo
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
       rules: [
        {
            test: /\.jsx$/,
            exclude: /node_mdules/,
            // O babel loader é a integração com o webpack
            use: 'babel-loader'
        }
       ] 
    }
};