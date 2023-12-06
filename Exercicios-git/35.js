class Viagem {
  constructor(destino, dataPartida, dataRetorno) {
    this.destino = destino;
    this.dataPartida = dataPartida;
    this.dataRetorno = dataRetorno;
  }

  calcularDuracao() {
    const partida = new Date(this.dataPartida);
    const retorno = new Date(this.dataRetorno);
    const diffTime = Math.abs(retorno - partida);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
}

const viagem1 = new Viagem("Paris", "2022-10-01", "2022-10-10");
console.log(viagem1.calcularDuracao());

const viagem2 = new Viagem("New York", "2022-12-15", "2022-12-25");
console.log(viagem2.calcularDuracao());
