module.exports = { 
  presets: [
    // O @babel/preset-env converte código JavaScript moderno, que 
    // pode conter recursos não suportados por todos os navegadores, 
    // em uma versão que funcione na maioria dos navegadores.
    '@babel/preset-env',
    // Define o preset do babel para react, para poder
    // converter arquivos .jsx
    '@babel/preset-react'
  ]  
}