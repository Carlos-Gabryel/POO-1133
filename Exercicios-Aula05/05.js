class Restaurante {
  constructor(nome, tipoCulinaria) {
    this.nome = nome;
    this.tipoCulinaria = tipoCulinaria;
    this.menu = [];
  }

  adicionarPratoNoMenu(prato) {
    this.menu.push(prato);
  }

  receberPedido(prato) {
    if (this.menu.includes(prato)) {
      console.log(`Pedido recebido: ${prato}`);
    } else {
      console.log(`Desculpe, o prato ${prato} não está disponível no menu.`);
    }
  }
}

const restaurante = new Restaurante("Restaurante A", "Italiana");

restaurante.adicionarPratoNoMenu("Lasanha");
restaurante.adicionarPratoNoMenu("Pizza");
restaurante.adicionarPratoNoMenu("Spaghetti");

restaurante.receberPedido("Pizza");

restaurante.receberPedido("Hamburguer");