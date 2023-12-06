class Biblioteca {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.livrosDisponiveis = [];
  }

  adicionarLivro(livro) {
    this.livrosDisponiveis.push(livro);
  }

  emprestarLivro(livro) {
    const index = this.livrosDisponiveis.indexOf(livro);
    if (index !== -1) {
      this.livrosDisponiveis.splice(index, 1);
      return livro;
    } else {
      console.log("Livro não encontrado");
    }
  }
}


const biblioteca1 = new Biblioteca("Biblioteca Central", "Rua A, 123");
const biblioteca2 = new Biblioteca("Biblioteca Municipal", "Avenida B, 456");

const livro1 = "Livro 1";
const livro2 = "Livro 2";
const livro3 = "Livro 3";

biblioteca1.adicionarLivro(livro1);
biblioteca1.adicionarLivro(livro2);
biblioteca2.adicionarLivro(livro3);

console.log(biblioteca1.livrosDisponiveis);
console.log(biblioteca2.livrosDisponiveis);

console.log(biblioteca1.emprestarLivro(livro1));
console.log(biblioteca1.livrosDisponiveis);

console.log(biblioteca2.emprestarLivro(livro2));
console.log(biblioteca2.livrosDisponiveis);
