class Cachorro {
  constructor(nome, raça, idade) {
    this.nome = nome;
    this.raça = raça;
    this.idade = idade;
  }

  latir() {
    console.log("Au au!");
  }

  calcularIdadeHumana() {
    return this.idade * 7;
  }
}

const cachorro1 = new Cachorro("Dogue", "Labrador", 3);
cachorro1.latir();
console.log(cachorro1.calcularIdadeHumana());

const cachorro2 = new Cachorro("Nina", "Poodle", 5);
cachorro2.latir();
console.log(cachorro2.calcularIdadeHumana());
