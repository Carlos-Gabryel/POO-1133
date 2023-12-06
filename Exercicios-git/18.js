class Celular {
  constructor(marca, modelo, armazenamentoInterno) {
    this.marca = marca;
    this.modelo = modelo;
    this.armazenamentoInterno = armazenamentoInterno;
    this.aplicativos = [];
  }

  adicionarAplicativo(aplicativo) {
    if (this.espacoDisponivel() >= aplicativo.espaco) {
      this.aplicativos.push(aplicativo);
      return true;
    } else {
      return false;
    }
  }

  espacoDisponivel() {
    let espacoUsado = this.aplicativos.reduce((total, aplicativo) => {
      return total + aplicativo.espaco;
    }, 0);
    return this.armazenamentoInterno - espacoUsado;
  }
}

class Aplicativo {
  constructor(nome, espaco) {
    this.nome = nome;
    this.espaco = espaco;
  }
}

const celular1 = new Celular("Samsung", "Galaxy ZFlip 5", 128);
const celular2 = new Celular("Apple", "iPhone (ECA) 12", 64);

const aplicativo1 = new Aplicativo("WhatsApp", 10);
const aplicativo2 = new Aplicativo("Instagram", 20);
const aplicativo3 = new Aplicativo("Spotify", 30);

console.log(celular1.adicionarAplicativo(aplicativo1));
console.log(celular1.adicionarAplicativo(aplicativo2));
console.log(celular1.adicionarAplicativo(aplicativo3));

console.log(celular2.adicionarAplicativo(aplicativo1));
console.log(celular2.adicionarAplicativo(aplicativo2));
console.log(celular2.adicionarAplicativo(aplicativo3));

console.log(celular1.espacoDisponivel());
console.log(celular2.espacoDisponivel());
