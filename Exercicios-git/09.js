class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularValorTotal() {
    return this.preco * this.quantidade;
  }

  adicionarUnidades(qtd) {
    this.quantidade += qtd;
  }

  removerUnidades(qtd) {
    if (this.quantidade >= qtd) {
      this.quantidade -= qtd;
    } else {
      console.log("Não há unidades suficientes em estoque.");
    }
  }
}

const produto1 = new Produto("Camiseta", 29.99, 10);
console.log(produto1.calcularValorTotal());

produto1.adicionarUnidades(5);
console.log(produto1.quantidade);

produto1.removerUnidades(3);
console.log(produto1.quantidade);

produto1.removerUnidades(20);
console.log(produto1.quantidade);
