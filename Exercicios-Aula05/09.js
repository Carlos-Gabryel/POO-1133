class ExploradorOceanoProfundo {
  constructor(nome, submarino) {
    this.nome = nome;
    this.submarino = submarino;
    this.descobertasSubmarinas = [];
    this.explorando = false;
    this.amostrasEncontradas = 0;
  }

  mergulhar() {
    this.explorando = true;
    console.log(`${this.nome} está mergulhando no oceano profundo.`);
  }

  subir() {
    this.explorando = false;
    console.log(`${this.nome} está subindo à superfície.`);
  }

  coletarAmostras(quantidade) {
    this.amostrasEncontradas += quantidade;
    console.log(`${this.nome} coletou ${quantidade} amostras.`);
  }

  estudarCriaturasMarinhas() {
    console.log(`${this.nome} está estudando as amostras encontradas.`);
    console.log(`${this.nome} devolveu as amostras para o mar.`);
    this.amostrasEncontradas = 0;
  }
}

const explorador = new ExploradorOceanoProfundo("Gabryel", "Submarino Amarelo");
explorador.mergulhar();
explorador.coletarAmostras(5);
explorador.estudarCriaturasMarinhas();
explorador.subir();
