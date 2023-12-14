class FestaSecreta {
  #local;
  #hora;
  #senha = "1234";

  constructor(local, hora) {
    this.#local = local;
    this.#hora = hora;
  }

  getDetalhesFesta(senha) {
    if (senha === this.#senha) {
      return `Local: ${this.#local}, Hora: ${this.#hora}`;
    } else {
      return "Senha incorreta! Você não tem permissão para acessar os detalhes da festa.";
    }
  }
}

const festa = new FestaSecreta("Casa da Maria", "20:00");
console.log(festa.getDetalhesFesta("1234"));