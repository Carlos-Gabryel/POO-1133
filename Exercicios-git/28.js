class CarroEsportivo {
  constructor(marca, modelo, ano, velocidadeMaxima) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.velocidadeMaxima = velocidadeMaxima;
    this.velocidadeAtual = 0;
  }

  acelerar() {
    this.velocidadeAtual += 10;
  }

  frear() {
    this.velocidadeAtual -= 10;
  }

  exibirVelocidadeAtual() {
    console.log(
      `A velocidade atual do ${this.marca} ${this.modelo} é ${this.velocidadeAtual} km/h.`
    );
  }
}

const carro1 = new CarroEsportivo("Ferrari", "F40", 1992, 324);
carro1.acelerar();
carro1.exibirVelocidadeAtual();
carro1.frear();
carro1.exibirVelocidadeAtual();
