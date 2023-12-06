class Escola {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.alunosMatriculados = [];
  }

  matricularAluno(aluno) {
    this.alunosMatriculados.push(aluno);
  }

  exibirAlunosMatriculados() {
    console.log("Alunos matriculados na escola:");
    this.alunosMatriculados.forEach((aluno) => {
      console.log(aluno);
    });
  }
}

const escola1 = new Escola("Escola ABC", "Rua A, 123");
const escola2 = new Escola("Escola DEF", "Rua B, 456");

escola1.matricularAluno("João");
escola1.matricularAluno("Maria");
escola1.exibirAlunosMatriculados();

escola2.matricularAluno("Pedro");
escola2.exibirAlunosMatriculados();
