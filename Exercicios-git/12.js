class Casa {
  constructor(endereco, numeroQuartos, area) {
    this.endereco = endereco;
    this.numeroQuartos = numeroQuartos;
    this.area = area;
  }
}

const casa1 = new Casa("Rua A, 123", 3, 150);
const casa2 = new Casa("Rua B, 456", 4, 200);

console.log("Detalhes da Casa 1:");
console.log("Endereço:", casa1.endereco);
console.log("Número de quartos:", casa1.numeroQuartos);
console.log("Área:", casa1.area);

console.log("Detalhes da Casa 2:");
console.log("Endereço:", casa2.endereco);
console.log("Número de quartos:", casa2.numeroQuartos);
console.log("Área:", casa2.area);
