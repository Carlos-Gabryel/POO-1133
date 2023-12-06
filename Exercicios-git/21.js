class ProdutoEletronico {
  constructor(nome, preco, garantia) {
    this.nome = nome;
    this.preco = preco;
    this.garantia = garantia;
  }

  estaNaGarantia(mesesDesdeCompra) {
    return mesesDesdeCompra <= this.garantia;
  }
}


const celular = new ProdutoEletronico("Celular", 1500, 12);
const mesesDesdeCompra = 6;
console.log(celular.estaNaGarantia(mesesDesdeCompra));
