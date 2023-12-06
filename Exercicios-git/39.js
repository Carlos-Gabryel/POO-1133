class RelatórioFinanceiro {
  constructor(mês, ano) {
    this.mês = mês;
    this.ano = ano;
    this.despesas = [];
  }

  adicionarDespesa(despesa) {
    this.despesas.push(despesa);
  }

  calcularTotalDespesas() {
    let total = 0;
    for (let despesa of this.despesas) {
      total += despesa.valor;
    }
    return total;
  }
}

const relatório1 = new RelatórioFinanceiro("Janeiro", 2022);
const relatório2 = new RelatórioFinanceiro("Fevereiro", 2022);

relatório1.adicionarDespesa({ valor: 100 });
relatório1.adicionarDespesa({ valor: 200 });
relatório2.adicionarDespesa({ valor: 150 });

const totalDespesasJaneiro2022 = relatório1.calcularTotalDespesas();
const totalDespesasFevereiro2022 = relatório2.calcularTotalDespesas();

console.log(`Total de despesas em Janeiro/2022: ${totalDespesasJaneiro2022}`);
console.log(
  `Total de despesas em Fevereiro/2022: ${totalDespesasFevereiro2022}`
);
