class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }
}

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
const livro2 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997);

console.log(livro1);
console.log(livro2);
