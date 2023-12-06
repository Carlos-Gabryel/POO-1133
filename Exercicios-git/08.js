class Triangulo {
  constructor(lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  verificarTriangulo() {
    if (this.lado1 + this.lado2 > this.lado3 &&
        this.lado1 + this.lado3 > this.lado2 &&
        this.lado2 + this.lado3 > this.lado1) {
      return true;
    } else {
      return false;
    }
  }

  calcularArea() {
    const semiPerimetro = (this.lado1 + this.lado2 + this.lado3) / 2;
    const area = Math.sqrt(semiPerimetro * (semiPerimetro - this.lado1) * (semiPerimetro - this.lado2) * (semiPerimetro - this.lado3));
    return area;
  }
}

const triangulo1 = new Triangulo(3, 4, 5);
console.log(triangulo1.verificarTriangulo());
console.log(triangulo1.calcularArea());

const triangulo2 = new Triangulo(1, 2, 3);
console.log(triangulo2.verificarTriangulo());
console.log(triangulo2.calcularArea());
