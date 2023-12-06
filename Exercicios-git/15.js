class Jogo {
  constructor(nome, genero, classificacaoEtaria) {
    this.nome = nome;
    this.genero = genero;
    this.classificacaoEtaria = classificacaoEtaria;
  }
}

const jogo1 = new Jogo("Pokemon: Scarlet & Violet", "Ação e Aventura", );
const jogo2 = new Jogo("Animal Crossing: New Horizons", "Simulação", 3);

console.log("Informações do Jogo 1:");
console.log("Nome:", jogo1.nome);
console.log("Gênero:", jogo1.genero);
console.log("Classificação Etária:", jogo1.classificacaoEtaria);

console.log("Informações do Jogo 2:");
console.log("Nome:", jogo2.nome);
console.log("Gênero:", jogo2.genero);
console.log("Classificação Etária:", jogo2.classificacaoEtaria);
