
const aluno = {
  nome: "Gabryel",
  idade: 29,
  mostrarInformacoes() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
  }
};

console.log(aluno.mostrarInformacoes());