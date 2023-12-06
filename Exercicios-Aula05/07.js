class ConstrutorCastelos {
  constructor(nome, estiloArquitetonico, materiaisUsados) {
    this.nome = nome;
    this.estiloArquitetonico = estiloArquitetonico;
    this.materiaisUsados = materiaisUsados;
    this.torresConstruidas = 0;
    this.aposentosAdicionados = 0;
  }

  construirTorre() {
    this.torresConstruidas++;
    console.log(`Torre construída! Total de torres: ${this.torresConstruidas}`);
  }

  adicionarAposentos() {
    this.aposentosAdicionados++;
    console.log(`Aposentos adicionados! Total de aposentos: ${this.aposentosAdicionados}`);
  }
}

const castelo1 = new ConstrutorCastelos("Castelo de Pedra", "Gótico", ["Pedra", "Madeira"]);

castelo1.construirTorre();

castelo1.adicionarAposentos();

const castelo2 = new ConstrutorCastelos("Castelo de Areia", "Árabe", ["Areia", "Palha"]);

castelo2.construirTorre();
castelo2.construirTorre();

castelo2.adicionarAposentos();
castelo2.adicionarAposentos();
castelo2.adicionarAposentos();
