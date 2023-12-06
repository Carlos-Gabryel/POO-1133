class Conta {
  constructor(numeroConta, saldo, titularConta) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.titularConta = titularConta;
  }

  verificarDebito() {
    return this.saldo < 0;
  }

  depositar(valor) {
    this.saldo += valor;
  }
}

const conta1 = new Conta(1234, 1000, "João");
console.log(conta1.verificarDebito());

conta1.depositar(500);
console.log(conta1.saldo);
