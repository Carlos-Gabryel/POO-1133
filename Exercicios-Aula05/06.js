class ClubeAstronomia {
  constructor(nome, local, membros) {
    this.nome = nome;
    this.local = local;
    this.membros = membros;
  }

  realizarObservacao() {
    console.log("Realizando observação astronômica...");
  }

  organizarEventosEstelares() {
    console.log("Organizando eventos estelares...");
  }
}

const clube = new ClubeAstronomia("Clube de Astronomia", "Observatório Astronômico", ["João", "Maria", "Pedro"]);
clube.realizarObservacao();
clube.organizarEventosEstelares();
