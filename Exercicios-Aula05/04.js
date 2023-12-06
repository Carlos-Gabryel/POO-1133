class ParqueEcológico {
  constructor(nome, localizacao) {
    this.nome = nome;
    this.localizacao = localizacao;
    this.fauna = [];
    this.flora = [];
  }

  adicionarEspécie(tipo, especie) {
    if (tipo === "fauna") {
      this.fauna.push(especie);
    } else if (tipo === "flora") {
      this.flora.push(especie);
    }
  }

  organizarTourVirtual() {
    console.log(`Tour virtual do parque ${this.nome} em ${this.localizacao}`);
    console.log(`Fauna: ${this.fauna.join(", ")}`);
    console.log(`Flora: ${this.flora.join(", ")}`);
  }
}

const parque1 = new ParqueEcológico("Parque A", "Localização A");

parque1.adicionarEspécie("fauna", "Leão");
parque1.adicionarEspécie("fauna", "Elefante");
parque1.adicionarEspécie("flora", "Árvore A");
parque1.adicionarEspécie("flora", "Flor B");

parque1.organizarTourVirtual();

const parque2 = new ParqueEcológico("Parque B", "Localização B");

parque2.adicionarEspécie("fauna", "Tigre");
parque2.adicionarEspécie("fauna", "Girafa");
parque2.adicionarEspécie("flora", "Árvore C");
parque2.adicionarEspécie("flora", "Flor D");

parque2.organizarTourVirtual();