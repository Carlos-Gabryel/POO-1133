
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

const carro1 = new Carro("Ford", "Mustang", 2022);
const carro2 = new Carro("Chevrolet", "Camaro", 2021);

console.log(carro1);
console.log(carro2);
