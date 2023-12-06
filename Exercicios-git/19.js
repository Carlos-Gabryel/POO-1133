class Aluno {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
    this.disciplinas = [];
  }

  adicionarDisciplina(disciplina) {
    this.disciplinas.push(disciplina);
  }

  calcularMediaGeral() {
    let somaNotas = 0;
    let totalDisciplinas = this.disciplinas.length;

    for (let i = 0; i < totalDisciplinas; i++) {
      somaNotas += this.disciplinas[i].nota;
    }

    return somaNotas / totalDisciplinas;
  }
}

const aluno1 = new Aluno("João", "2021001");
const aluno2 = new Aluno("Maria", "2021002");

aluno1.adicionarDisciplina({ nome: "Matemática", nota: 8 });
aluno1.adicionarDisciplina({ nome: "Português", nota: 7 });

aluno2.adicionarDisciplina({ nome: "História", nota: 9 });
aluno2.adicionarDisciplina({ nome: "Geografia", nota: 6 });

console.log(aluno1.calcularMediaGeral());
console.log(aluno2.calcularMediaGeral());
