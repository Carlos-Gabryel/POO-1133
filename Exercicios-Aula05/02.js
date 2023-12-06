class Dragao {
  constructor(nome, cor, elemento, nivelSaude) {
    this.nome = nome;
    this.cor = cor;
    this.elemento = elemento;
    this.nivelSaude = nivelSaude;
    this.voando = false;
    this.cuspirFogoCount = 0;
  }

  voar() {
    this.voando = true;
    console.log(`O dragão ${this.nome} está voando!`);
  }

  pousar() {
    this.voando = false;
    console.log(`O dragão ${this.nome} pousou.`);
  }

  cuspirFogo() {
    if (this.cuspirFogoCount < 5) {
      this.cuspirFogoCount++;
      console.log(`O dragão ${this.nome} cuspiu fogo!`);
    } else {
      console.log(`O dragão ${this.nome} não pode cuspir fogo novamente.`);
    }
  }

  comer() {
    this.nivelSaude += 10;
    console.log(
      `O dragão ${this.nome} comeu algo e sua saúde aumentou para ${this.nivelSaude}.`
    );
  }
}
const dragao1 = new Dragao("Dragão Vermelho", "Vermelho", "Fogo", 80);

console.log(dragao1);

dragao1.voar();
console.log(dragao1.voando);

dragao1.pousar();
console.log(dragao1.voando);

dragao1.cuspirFogo();
dragao1.cuspirFogo();
dragao1.cuspirFogo();
dragao1.cuspirFogo();
dragao1.cuspirFogo();
dragao1.cuspirFogo();

dragao1.comer();
