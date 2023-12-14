class DiarioDoHeroi {
  #segredos = [];
  #missoes = [];

  adicionarSegredo(segredo) {
    this.#segredos.push(segredo);
  }

  adicionarMissao(missao) {
    this.#missoes.push(missao);
  }

  leiaDiario(senha) {
    if (senha === 'senha-secreta') {
      return this.#segredos;
    } else {
      return 'Ops! Você não tem permissão para ler o diário!';
    }
  }
}

const diario = new DiarioDoHeroi();
diario.adicionarSegredo('Eu sou o Batman!');
diario.adicionarMissao('Salvar Gotham City');
console.log(diario.leiaDiario('senha-secreta'));
console.log(diario.leiaDiario('senha-errada'));
