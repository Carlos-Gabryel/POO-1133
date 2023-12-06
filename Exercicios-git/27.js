class Relogio {
  constructor(hora, minuto, segundo) {
    this.hora = hora;
    this.minuto = minuto;
    this.segundo = segundo;
  }

  ajustarRelogio(hora, minuto, segundo) {
    this.hora = hora;
    this.minuto = minuto;
    this.segundo = segundo;
  }

  adicionarSegundo() {
    this.segundo++;
    if (this.segundo === 60) {
      this.segundo = 0;
      this.minuto++;
      if (this.minuto === 60) {
        this.minuto = 0;
        this.hora++;
        if (this.hora === 24) {
          this.hora = 0;
        }
      }
    }
  }

  exibirHoraAtual() {
    return `${this.hora}:${this.minuto}:${this.segundo}`;
  }
}

const relogio = new Relogio(12, 30, 45);
console.log(relogio.exibirHoraAtual());

relogio.ajustarRelogio(23, 59, 59);
relogio.adicionarSegundo();
console.log(relogio.exibirHoraAtual());
