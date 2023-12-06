
class SorveteriaMagica {
  constructor(nome, varinhasMagicas) {
    this.nome = nome;
    this.sabores = [];
    this.varinhasMagicas = varinhasMagicas;
  }

  adicionarSabores(sabores) {
    this.sabores.push(...sabores);
  }

  criarSorveteMagico() {
    if (this.sabores.length > 0) {
      const sorveteMagico = this.sabores.join(' e ');
      console.log(`Sorvete mágico criado com os sabores: ${sorveteMagico}`);
    } else {
      console.log('Não há sabores adicionados para criar o sorvete mágico.');
    }
  }

  realizarFeitiçosGelados() {
    if (this.varinhasMagicas.length > 0) {
      const varinhaMagica = this.varinhasMagicas[Math.floor(Math.random() * this.varinhasMagicas.length)];
      console.log(`Realizando feitiço gelado com a varinha mágica ${varinhaMagica}.`);
    } else {
      console.log('Não há varinhas mágicas disponíveis para realizar feitiços gelados.');
    }
  }
}

const minhaSorveteria = new SorveteriaMagica('Sorveteria Mágica', ['Morango', 'Chocolate', 'Baunilha']);
minhaSorveteria.adicionarSabores(['Creme', 'Limão']);
minhaSorveteria.criarSorveteMagico();
minhaSorveteria.realizarFeitiçosGelados();
