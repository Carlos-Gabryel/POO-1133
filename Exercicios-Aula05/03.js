class ConsoleRetro {
  constructor(nome, anoLancamento) {
    this.nome = nome;
    this.anoLancamento = anoLancamento;
    this.jogosDisponiveis = [];
  }

  adicionarJogo(jogo) {
    this.jogosDisponiveis.push(jogo);
  }

  jogar() {
    if (this.jogosDisponiveis.length > 0) {
      console.log(`Jogando ${this.jogosDisponiveis[0]} no console ${this.nome}`);
    } else {
      console.log(`Não há jogos disponíveis no console ${this.nome}`);
    }
  }
}

const consoleRetro1 = new ConsoleRetro("Super Nintendo", 1990);

console.log(consoleRetro1.nome);
console.log(consoleRetro1.anoLancamento);
console.log(consoleRetro1.jogosDisponiveis);

consoleRetro1.adicionarJogo("Super Mario Bros");
console.log(consoleRetro1.jogosDisponiveis);

consoleRetro1.adicionarJogo("The Legend of Zelda");
console.log(consoleRetro1.jogosDisponiveis);


consoleRetro1.jogar();

consoleRetro1.jogar();

const consoleRetro2 = new ConsoleRetro("Console Retro 2", 1985);

consoleRetro2.jogar();