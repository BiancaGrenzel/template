const path = require('path')

module.exports = {
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
        extensions: ['.js', '.jsx']
    },
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