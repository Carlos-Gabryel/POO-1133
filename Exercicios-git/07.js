class Aluno {
  constructor(nome, matricula, notas) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = notas;
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      return 0;
    }

    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    return soma / this.notas.length;
  }
}

const aluno1 = new Aluno("João", "123456", [8, 9, 7]);
const aluno2 = new Aluno("Maria", "654321", [6, 7, 5, 8]);

console.log(aluno1.calcularMedia());
console.log(aluno2.calcularMedia());
