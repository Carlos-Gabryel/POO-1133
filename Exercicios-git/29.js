class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  saudar() {
    console.log(`Olá, sou um ${this.profissao}.`);
  }
}

const pessoa1 = new Pessoa("João", 30, "médico");
const pessoa2 = new Pessoa("Maria", 25, "engenheira");

pessoa1.saudar();
pessoa2.saudar();
