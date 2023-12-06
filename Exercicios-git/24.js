class Calendario {
  constructor(dia, mes, ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  verificarData() {
    if (this.mes < 1 || this.mes > 12) {
      return false;
    }

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const maxDias = diasPorMes[this.mes - 1];


    if (this.mes === 2 && (this.ano % 4 === 0 && this.ano % 100 !== 0) || this.ano % 400 === 0) {
      maxDias = 29;
    }

    if (this.dia < 1 || this.dia > maxDias) {
      return false;
    }

    return true;
  }
}


const data1 = new Calendario(31, 12, 2022);
console.log(data1.verificarData());

const data2 = new Calendario(29, 2, 2021);
console.log(data2.verificarData());
