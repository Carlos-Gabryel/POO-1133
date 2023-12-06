const circulo = {
  raio: 10,
  calcularArea: function () {
    return Math.PI * Math.pow(this.raio, 2);
  },
};

console.log(circulo.calcularArea());
