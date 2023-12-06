
class ContaPoupanca {
  constructor(numeroConta, saldo, taxaJurosAnual) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.taxaJurosAnual = taxaJurosAnual;
  }

  calcularJurosMensais() {
    const jurosMensais = (this.saldo * this.taxaJurosAnual) / 12;
    return jurosMensais;
  }

  depositarJuros() {
    const jurosMensais = this.calcularJurosMensais();
    this.saldo += jurosMensais;
  }
}


const conta1 = new ContaPoupanca(123456, 1000, 0.05);
console.log(conta1.calcularJurosMensais()); 
console.log(conta1.saldo);
conta1.depositarJuros();
console.log(conta1.saldo);
