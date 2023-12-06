class Animal {
  constructor(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
  }
}

const animal1 = new Animal("Dogue", "Cachorro", 5);
const animal2 = new Animal("Nina", "Gato", 3);

console.log(animal1);
console.log(animal2);
