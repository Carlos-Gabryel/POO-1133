class Circulo {
  constructor(raio) {
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * Math.pow(this.raio, 2);
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.raio;
  }
}

const circulo1 = new Circulo(5);
console.log("Círculo 1:");
console.log("Área:", circulo1.calcularArea());
console.log("Perímetro:", circulo1.calcularPerimetro());

const circulo2 = new Circulo(10);
console.log("Círculo 2:");
console.log("Área:", circulo2.calcularArea());
console.log("Perímetro:", circulo2.calcularPerimetro());
