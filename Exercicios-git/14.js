class TrianguloRetangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularHipotenusa() {
    return Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.altura, 2));
  }
}

const triangulo1 = new TrianguloRetangulo(3, 4);
const hipotenusa1 = triangulo1.calcularHipotenusa();
console.log("Hipotenusa do triângulo 1:", hipotenusa1);

const triangulo2 = new TrianguloRetangulo(5, 12);
const hipotenusa2 = triangulo2.calcularHipotenusa();
console.log("Hipotenusa do triângulo 2:", hipotenusa2);
