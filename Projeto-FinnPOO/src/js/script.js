var prompt = require("prompt-sync")({ sigint: true });
// var prompt = ps({ sigint: true });

let contas = [];
let contasCorrente = [];
let contasPoupanca = [];
class Cliente {
  constructor(cpf, senha) {
    this.cpf = cpf;
    this.senha = senha;
  }
}
class Conta {
  constructor(numero, saldo, cliente) {
    this.numero = numero;
    this.saldo = saldo;
    this.cliente = cliente;
  }
  // Encapsulamento
  getSaldo() {
    return this.saldo;
  }

  setSaldo(novoSaldo) {
    this.saldo = novoSaldo;
  }
}
class ContaCorrente extends Conta {
  constructor(numero, saldo, cliente, limiteChequeEspecial) {
    super(numero, saldo, cliente);
    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  realizarOperacao(valor) {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }
}

class ContaPoupanca extends Conta {
  constructor(numero, saldo, cliente, taxaRendimento) {
    super(numero, saldo, cliente);
    this.taxaRendimento = taxaRendimento;
  }

  realizarOperacao(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }
}

class OperacaoFinanceira {
  static depositar(conta, valor) {
    conta.setSaldo(conta.getSaldo() + valor);
  }

  static sacar(conta, valor) {
    if (conta.realizarOperacao(valor)) {
      console.log("Saque realizado com sucesso");
    } else {
      console.log("Saldo insuficiente");
    }
  }
}
function criarNumeroConta() {
  const numero = Math.floor(Math.random() * 1000);
  return numero;
}
function novoCliente(cpf, senha) {
  var cpf = prompt("Digite seu CPF: ");
  var senha = prompt("Digite sua senha: ");
  const cliente = new Cliente(cpf, senha);
  const conta = new Conta(criarNumeroConta(), 0, cliente);
  contas.push(conta);
  console.log(contas);
}
function criarContaCorrente(contas) {
  const contaCorrente = new ContaCorrente(
    contas[0].numero,
    0,
    contas[0].cliente,
    100
  );
  contas.splice(0, 1);
  contasCorrente.push(contaCorrente);
  console.log(contasCorrente);
}
function criarContaPoupanca(contas) {
  const contaPoupanca = new ContaPoupanca(
    contas[0].numero,
    0,
    contas[0].cliente,
    0.5
  );
  contas.splice(0, 1);
  contasPoupanca.push(contaPoupanca);
  console.log(contasPoupanca);
}

function verificarUsuario(cpf, senha) {
  const clienteEncontrado = contas.find((conta) => conta.cliente.cpf === cpf);
  if (clienteEncontrado && clienteEncontrado.cliente.senha === senha) {
    return true;
  } else {
    return false;
  }
}

function calculoRendimento(conta, taxaRendimento, saldo) {}

//testes
novoCliente();
// criarContaCorrente(contas);
// console.log(contas);
