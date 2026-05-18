let livros = require('./listaLivros');
let menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual); // <-- função chamada corretamente
    
    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    console.log("Posição atual:", atual);
    console.log("Livro atual:", livroAtual);
    console.log("Livro com menor preço:", livroMenorPreco);
    
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);