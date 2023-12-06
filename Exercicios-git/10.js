class Funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  aumentarSalario(porcentagem) {
    this.salario += this.salario * (porcentagem / 100);
  }
}

const funcionario1 = new Funcionario("João", "Analista", 5000);
console.log(funcionario1.salario);

funcionario1.aumentarSalario(10);
console.log(funcionario1.salario);
