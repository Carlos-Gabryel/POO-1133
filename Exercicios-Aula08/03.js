class CaixaMagica {
  constructor() {
    this.itens = [];
  }

  adicionarItem(item) {
    this.itens.push(item);
  }

  abracadabra(palavraMagica) {
    if (palavraMagica === "expelliarmus") {
      return this.itens;
    } else {
      return "Oops! A palavra mágica está errada. Tente novamente!";
    }
  }
}

const minhaCaixaMagica = new CaixaMagica();
minhaCaixaMagica.adicionarItem("Varinha");
minhaCaixaMagica.adicionarItem("Chapeu Seletor");
minhaCaixaMagica.adicionarItem("Pufoso");

console.log(minhaCaixaMagica.abracadabra("expelliarmus"));
console.log(minhaCaixaMagica.abracadabra("a vaca quebrada"));
