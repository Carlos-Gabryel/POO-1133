class Cafeteira {
  constructor(marca, capacidade) {
    this.marca = marca;
    this.capacidade = capacidade;
    this.quantidadeCafe = 0;
  }

  encherCafeteira(quantidade) {
    if (quantidade <= this.capacidade) {
      this.quantidadeCafe += quantidade;
      console.log(`Cafeteira foi enchida com ${quantidade}ml de café.`);
    } else {
      console.log(`A capacidade da cafeteira é de ${this.capacidade}ml. Não é possível encher com essa quantidade.`);
    }
  }

  fazerCafe() {
    if (this.quantidadeCafe >= 50) {
      this.quantidadeCafe -= 50;
      console.log("Uma xícara de café foi feita.");
    } else {
      console.log("Não há café suficiente na cafeteira para fazer uma xícara.");
    }
  }
}

const minhaCafeteira = new Cafeteira("Philips", 1000);
minhaCafeteira.encherCafeteira(500);
minhaCafeteira.fazerCafe();
