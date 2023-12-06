class Restaurante {
  constructor(nome, tipoCozinha) {
    this.nome = nome;
    this.tipoCozinha = tipoCozinha;
    this.menu = [];
  }

  adicionarPrato(prato) {
    this.menu.push(prato);
  }

  exibirMenu() {
    console.log("Menu do Restaurante " + this.nome + ":");
    this.menu.forEach((prato, index) => {
      console.log(index + 1 + ". " + prato);
    });
  }
}

const restaurante1 = new Restaurante("Restaurante A", "Italiana");
restaurante1.adicionarPrato("Lasanha");
restaurante1.adicionarPrato("Pizza");
restaurante1.exibirMenu();

const restaurante2 = new Restaurante("Restaurante B", "Chinesa");
restaurante2.adicionarPrato("Frango Xadrez");
restaurante2.adicionarPrato("Yakissoba");
restaurante2.exibirMenu();
