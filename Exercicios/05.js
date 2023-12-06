class Retângulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularÁrea() {
    return this.largura * this.altura;
  }
}

const retângulo = new Retângulo(5, 4);
console.log(retângulo.calcularÁrea());
