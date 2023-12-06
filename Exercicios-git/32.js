class Loja {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.listaProdutos = [];
  }

  adicionarProduto(produto) {
    this.listaProdutos.push(produto);
  }

  calcularPrecoTotal() {
    let precoTotal = 0;
    for (let produto of this.listaProdutos) {
      precoTotal += produto.preco;
    }
    return precoTotal;
  }
}

const minhaLoja = new Loja("Minha Loja", "Rua Principal, 123");
minhaLoja.adicionarProduto({ nome: "Produto 1", preco: 10 });
minhaLoja.adicionarProduto({ nome: "Produto 2", preco: 20 });
minhaLoja.adicionarProduto({ nome: "Produto 3", preco: 30 });

console.log(minhaLoja.calcularPrecoTotal());
