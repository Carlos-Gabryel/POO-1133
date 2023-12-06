class Pessoa {
  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }
}

const pessoa1 = new Pessoa("João", 25, "São Paulo");
const pessoa2 = new Pessoa("Maria", 30, "Rio de Janeiro");

console.log("Detalhes da pessoa 1:");
console.log("Nome:", pessoa1.nome);
console.log("Idade:", pessoa1.idade);
console.log("Cidade:", pessoa1.cidade);

console.log("Detalhes da pessoa 2:");
console.log("Nome:", pessoa2.nome);
console.log("Idade:", pessoa2.idade);
console.log("Cidade:", pessoa2.cidade);
