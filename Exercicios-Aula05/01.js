class NaveEspacial {
  constructor(nome, velocidadeMaxima, capacidadeTripulacao) {
    this.nome = nome;
    this.velocidadeMaxima = velocidadeMaxima;
    this.capacidadeTripulacao = capacidadeTripulacao;
    this.velocidadeAtual = 0;
    this.tripulacao = [];
  }

  acelerar() {
    this.velocidadeAtual += 10;
    console.log(`Velocidade atual: ${this.velocidadeAtual}`);
  }

  frear() {
    this.velocidadeAtual -= 10;
    console.log(`Velocidade atual: ${this.velocidadeAtual}`);
  }

  adicionarTripulante(tripulante) {
    if (this.tripulacao.length < this.capacidadeTripulacao) {
      this.tripulacao.push(tripulante);
      console.log(`Tripulante ${tripulante} adicionado.`);
    } else {
      console.log(`Capacidade máxima de tripulação atingida.`);
    }
  }

  removerTripulante(tripulante) {
    const index = this.tripulacao.indexOf(tripulante);
    if (index !== -1) {
      this.tripulacao.splice(index, 1);
      console.log(`Tripulante ${tripulante} removido.`);
    } else {
      console.log(`Tripulante ${tripulante} não encontrado.`);
    }
  }
}

const nave1 = new NaveEspacial("Milenium Falcon", 1000, 5);
console.log(nave1);

nave1.acelerar();

nave1.adicionarTripulante("John");
nave1.adicionarTripulante("Jane");
nave1.adicionarTripulante("Bob");
console.log(nave1);

nave1.adicionarTripulante("Alice");
nave1.adicionarTripulante("Mike");

nave1.removerTripulante("John");
console.log(nave1);

nave1.removerTripulante("Dave");
