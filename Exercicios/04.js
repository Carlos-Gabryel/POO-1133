
const livro = {
  titulo: "Harry Potter e a Pedra Filosofal",
  autor: "J. K. Rowling",
  detalhes() {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
  }
};

console.log(livro.detalhes());