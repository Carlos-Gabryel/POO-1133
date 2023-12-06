class Casa {
  constructor(endereco, numeroQuartos, valor) {
    this.endereco = endereco;
    this.numeroQuartos = numeroQuartos;
    this.valor = valor;
  }

  calcularPrecoPorMetroQuadrado() {
    const area = 94;
    const precoPorMetroQuadrado = this.valor / area;
    return precoPorMetroQuadrado;
  }
}

const casa1 = new Casa("Rua A, 123", 3, 300000);
const casa2 = new Casa("Rua B, 456", 4, 400000);

console.log(casa1.calcularPrecoPorMetroQuadrado());
console.log(casa2.calcularPrecoPorMetroQuadrado());
