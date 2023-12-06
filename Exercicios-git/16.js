class Funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  calcularSalarioAnual() {
    return this.salario * 12;
  }
}

const funcionario1 = new Funcionario("João", "Analista", 5000);
const funcionario2 = new Funcionario("Maria", "Gerente", 8000);

const salarioAnualFuncionario1 = funcionario1.calcularSalarioAnual();
const salarioAnualFuncionario2 = funcionario2.calcularSalarioAnual();

console.log(`Salário anual do funcionário 1: ${salarioAnualFuncionario1}`);
console.log(`Salário anual do funcionário 2: ${salarioAnualFuncionario2}`);
