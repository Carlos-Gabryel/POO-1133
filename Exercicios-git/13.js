class ContaCorrente {
  constructor(numeroConta, saldo, nomeTitular) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.nomeTitular = nomeTitular;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

const conta1 = new ContaCorrente(1234, 1000, "João");
conta1.depositar(500);
console.log(conta1.saldo);

conta1.sacar(200);
console.log(conta1.saldo);

conta1.sacar(1500);
console.log(conta1.saldo);
