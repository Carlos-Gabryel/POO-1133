class Estudante {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
    this.disciplinas = [];
  }

  adicionarDisciplina(disciplina) {
    this.disciplinas.push(disciplina);
  }

  removerDisciplina(disciplina) {
    const index = this.disciplinas.indexOf(disciplina);
    if (index !== -1) {
      this.disciplinas.splice(index, 1);
    }
  }
}

const estudante1 = new Estudante("João", "2021001");
estudante1.adicionarDisciplina("Matemática");
estudante1.adicionarDisciplina("Português");
console.log(estudante1.disciplinas);

estudante1.removerDisciplina("Português");
console.log(estudante1.disciplinas);
