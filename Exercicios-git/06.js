class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

const retangulo1 = new Retangulo(5, 10);
console.log(`Área do retângulo 1: ${retangulo1.calcularArea()}`);

const retangulo2 = new Retangulo(8, 12);
console.log(`Área do retângulo 2: ${retangulo2.calcularArea()}`);
