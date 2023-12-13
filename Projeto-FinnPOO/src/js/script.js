var prompt = require("prompt-sync")({ sigint: true });
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

  calculoRendimento() {
    const rendimento = this.saldo * this.taxaRendimento;
    this.saldo += rendimento;
    return rendimento;
  }
}

class OperacaoFinanceira {
  static depositar(conta, valor) {
    conta.setSaldo(conta.getSaldo() + valor);
  }

  static sacar(conta, valor) {
    if (conta.realizarOperacao(valor)) {
      console.log("Saque realizado com sucesso.");
    } else {
      console.log("Saldo insuficiente.");
    }
  }
}

function criarNumeroConta() {
  const numero = Math.floor(Math.random() * 1000);
  return numero;
}

function novoCliente() {
  var cpf = prompt("Digite seu CPF: ");
  var senha = prompt("Digite sua senha: ");
  if (cpf.length !== 11 || isNaN(cpf)) {
    console.log("CPF inválido. Tente novamente.");
    exibirMenuPrincipal();
  } else if (senha.length < 4) {
    console.log(
      "A senha deve conter pelo menos 4 caracteres. Tente novamente."
    );
    exibirMenuPrincipal();
  } else {
    const cliente = new Cliente(cpf, senha);
    const conta = new Conta(criarNumeroConta(), 0, cliente);
    contas.push(conta);
    exibirMenuTipoDeConta();
    console.log("Conta criada com sucesso.");
    exibirMenuPrincipal();
  }
}

function verificarClienteExistenteCorrente(cpf) {
  const clienteExistente = contasCorrente.find(
    (conta) => conta.cliente.cpf === cpf
  );
  if (clienteExistente) {
    return true;
  } else {
    return false;
  }
}
function verificarClienteExistentePoupanca(cpf) {
  const clienteExistente = contasPoupanca.find(
    (conta) => conta.cliente.cpf === cpf
  );
  if (clienteExistente) {
    return true;
  } else {
    return false;
  }
}

function exibirMenuTipoDeConta() {
  console.log("Selecione o tipo de conta que deseja criar:");
  console.log("1. Conta Corrente");
  console.log("2. Conta Poupança");

  var opcao = prompt("Digite o número da opção desejada: ");

  switch (opcao) {
    case "1":
      criarContaCorrente();
      break;
    case "2":
      criarContaPoupanca();
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
      exibirMenuPrincipal();
      break;
  }
}

function criarContaCorrente() {
  if (verificarClienteExistenteCorrente(contas[0].cliente.cpf)) {
    console.log("CPF já cadastrado. Não é possível criar uma nova conta.");
    exibirMenuPrincipal();
  } else if (verificarClienteExistentePoupanca(contas[0].cliente.cpf)) {
    console.log("CPF já cadastrado. Não é possível criar uma nova conta.");
    exibirMenuPrincipal();
  } else {
    const contaCorrente = new ContaCorrente(
      contas[0].numero,
      0,
      contas[0].cliente,
      1000
    );
    contas.splice(0, 1);
    contasCorrente.push(contaCorrente);
  }
}
function criarContaPoupanca() {
  if (verificarClienteExistentePoupanca(contas[0].cliente.cpf)) {
    console.log("CPF já cadastrado. Não é possível criar uma nova conta.");
    exibirMenuPrincipal();
  } else if (verificarClienteExistenteCorrente(contas[0].cliente.cpf)) {
    console.log("CPF já cadastrado. Não é possível criar uma nova conta.");
    exibirMenuPrincipal();
  } else {
    const contaPoupanca = new ContaPoupanca(
      contas[0].numero,
      0,
      contas[0].cliente,
      0.5
    );
    contas.splice(0, 1);
    contasPoupanca.push(contaPoupanca);
  }
}

function verificarUsuario(cpf, senha) {
  const clienteEncontradoCorrente = contasCorrente.find(
    (conta) => conta.cliente.cpf === cpf
  );
  const clienteEncontradoPoupanca = contasPoupanca.find(
    (conta) => conta.cliente.cpf === cpf
  );
  if (
    clienteEncontradoCorrente &&
    clienteEncontradoCorrente.cliente.senha === senha
  ) {
    return true;
  } else if (
    clienteEncontradoPoupanca &&
    clienteEncontradoPoupanca.cliente.senha === senha
  ) {
    return true;
  } else {
    return false;
  }
}

function exibirMenuPrincipal() {
  console.log("=== MENU PRINCIPAL ===");
  console.log("1. Criar conta");
  console.log("2. Login");
  console.log("0. Sair");
  const opcao = prompt("Digite a opção desejada: ");
  switch (opcao) {
    case "1":
      novoCliente();
      break;
    case "2":
      exibirMenuLogin();
      break;
    case "0":
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida.");
      exibirMenuPrincipal();
      break;
  }
}
function exibirMenuLogin() {
  console.log("=== LOGIN ===");
  var cpf = prompt("Digite seu CPF: ");
  var senha = prompt("Digite sua senha: ");
  if (verificarUsuario(cpf, senha)) {
    console.log("Login realizado com sucesso.");
    if (verificarClienteExistenteCorrente(cpf)) {
      exibirMenuLogadoCorrente();
    } else if (verificarClienteExistentePoupanca(cpf)) {
      exibirMenuLogadoPoupanca();
    }
  } else {
    console.log("CPF ou senha incorretos.");
    exibirMenuPrincipal();
  }
}

function exibirMenuLogadoCorrente() {
  console.log("=== MENU LOGADO ===");
  console.log("1. Ver saldo");
  console.log("2. Depositar");
  console.log("3. Sacar");
  console.log("0. Sair");
  const opcao = prompt("Digite a opção desejada: ");
  switch (opcao) {
    case "1":
      exibirSaldoCorrente();
      break;
    case "2":
      exibirDepositarCorrente();
      break;
    case "3":
      exibirSacarCorrente();
      break;
    case "0":
      console.log("Saindo...");
      exibirMenuPrincipal();
      break;
    default:
      console.log("Opção inválida.");
      exibirMenuLogadoCorrente();
      break;
  }
}
function exibirMenuLogadoPoupanca() {
  console.log("=== MENU LOGADO ===");
  console.log("1. Ver saldo");
  console.log("2. Depositar");
  console.log("3. Sacar");
  console.log("4. Render dinheiro (apenas conta poupança)");
  console.log("0. Sair");
  const opcao = prompt("Digite a opção desejada: ");
  switch (opcao) {
    case "1":
      exibirSaldopoupanca();
      break;
    case "2":
      exibirDepositarPoupanca();
      break;
    case "3":
      exibirSacarPoupanca();
      break;
    case "4":
      exibirRenderDinheiro();
      break;
    case "0":
      console.log("Saindo...");
      exibirMenuPrincipal();
      break;
    default:
      console.log("Opção inválida.");
      exibirMenuLogadoPoupanca();
      break;
  }
}

function exibirSaldoCorrente() {
  console.log("=== SALDO ===");
  console.log(
    "Saldo da Conta Corrente: ",
    contasCorrente[0].saldo,
    "e",
    contasCorrente[0].limiteChequeEspecial,
    "de limite de cheque especial"
  );
  console.log("0. Voltar");
  const opcao = prompt("Digite a opção desejada: ");
  switch (opcao) {
    case "0":
      exibirMenuLogadoCorrente();
      break;
    default:
      console.log("Opção inválida.");
      exibirSaldo();
      break;
  }
}
function exibirSaldopoupanca() {
  console.log("=== SALDO ===");
  console.log("Saldo da Conta Poupança: ", contasPoupanca[0].saldo);
  console.log("0. Voltar");
  const opcao = prompt("Digite a opção desejada: ");
  switch (opcao) {
    case "0":
      exibirMenuLogadoPoupanca();
      break;
    default:
      console.log("Opção inválida.");
      exibirSaldo();
      break;
  }
}

function exibirDepositarCorrente() {
  console.log("=== DEPOSITAR ===");
  var valorCC = parseFloat(
    prompt("Digite o valor a ser depositado na Conta Corrente: ")
  );
  OperacaoFinanceira.depositar(contasCorrente[0], valorCC);
  console.log("Depósito realizado com sucesso.");
  console.log("0. Voltar");
  const opcao = prompt("Digite a opção desejada: ");
  switch (opcao) {
    case "0":
      exibirMenuLogadoCorrente();
      break;
    default:
      console.log("Opção inválida.");
      exibirDepositar();
      break;
  }
}
function exibirDepositarPoupanca() {
  console.log("=== DEPOSITAR ===");
  var valorCP = parseFloat(
    prompt("Digite o valor a ser depositado na Conta Poupança: ")
  );
  OperacaoFinanceira.depositar(contasPoupanca[0], valorCP);
  console.log("Depósito realizado com sucesso.");
  console.log("0. Voltar");
  const opcao = prompt("Digite a opção desejada: ");
  switch (opcao) {
    case "0":
      exibirMenuLogadoPoupanca();
      break;
    default:
      console.log("Opção inválida.");
      exibirDepositar();
      break;
  }
}

function exibirSacarCorrente() {
  console.log("=== SACAR ===");
  var valorCC = parseFloat(
    prompt("Digite o valor a ser sacado da Conta Corrente: ")
  );
  OperacaoFinanceira.sacar(contasCorrente[0], valorCC);
  console.log("0. Voltar");
  const opcao = prompt("Digite a opção desejada: ");
  switch (opcao) {
    case "0":
      exibirMenuLogadoCorrente();
      break;
    default:
      console.log("Opção inválida.");
      exibirSacar();
      break;
  }
}

function exibirSacarPoupanca() {
  console.log("=== SACAR ===");
  var valorCP = parseFloat(
    prompt("Digite o valor a ser sacado da Conta Poupança: ")
  );
  OperacaoFinanceira.sacar(contasPoupanca[0], valorCP);
  console.log("0. Voltar");
  const opcao = prompt("Digite a opção desejada: ");
  switch (opcao) {
    case "0":
      exibirMenuLogadoPoupanca();
      break;
    default:
      console.log("Opção inválida.");
      exibirSacar();
      break;
  }
}

function exibirRenderDinheiro() {
  console.log("=== RENDER DINHEIRO ===");
  console.log("1. Conta Poupança");
  console.log("0. Voltar");
  const opcao = prompt("Digite a opção desejada: ");
  switch (opcao) {
    case "1":
      const rendimento = contasPoupanca[0].calculoRendimento();
      console.log("Rendimento da Conta Poupança: ", rendimento);
      console.log("Novo saldo da Conta Poupança: ", contasPoupanca[0].saldo);
      exibirMenuLogadoPoupanca();
      break;
    case "0":
      exibirMenuLogadoPoupanca();
      break;
    default:
      console.log("Opção inválida.");
      exibirRenderDinheiro();
      break;
  }
}

exibirMenuPrincipal();
