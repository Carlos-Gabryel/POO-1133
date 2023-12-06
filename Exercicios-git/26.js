class ProdutoAlimenticio {
  constructor(nome, preco, dataValidade) {
    this.nome = nome;
    this.preco = preco;
    this.dataValidade = dataValidade;
  }

  estaVencido() {
    const dataAtual = new Date();
    return dataAtual > this.dataValidade;
  }
}

const produto1 = new ProdutoAlimenticio("Leite", 3.5, new Date("2022-12-31"));
console.log(produto1.estaVencido());

const produto2 = new ProdutoAlimenticio("Pão", 2.0, new Date("2021-10-15"));
console.log(produto2.estaVencido());
