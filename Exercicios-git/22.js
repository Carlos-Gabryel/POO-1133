class Hotel {
  constructor(nome, localizacao, listaQuartos) {
    this.nome = nome;
    this.localizacao = localizacao;
    this.listaQuartos = listaQuartos;
  }

  reservarQuarto(numeroQuarto) {
    const quarto = this.listaQuartos.find(quarto => quarto.numero === numeroQuarto);
    if (quarto) {
      if (quarto.disponivel) {
        quarto.disponivel = false;
        console.log(`Quarto ${numeroQuarto} reservado com sucesso.`);
      } else {
        console.log(`Quarto ${numeroQuarto} indisponível.`);
      }
    } else {
      console.log(`Quarto ${numeroQuarto} não encontrado.`);
    }
  }

  verificarDisponibilidade(numeroQuarto) {
    const quarto = this.listaQuartos.find(quarto => quarto.numero === numeroQuarto);
    if (quarto) {
      if (quarto.disponivel) {
        console.log(`Quarto ${numeroQuarto} está disponível.`);
      } else {
        console.log(`Quarto ${numeroQuarto} está indisponível.`);
      }
    } else {
      console.log(`Quarto ${numeroQuarto} não encontrado.`);
    }
  }
}


const hotel1 = new Hotel("Hotel A", "Local A", [
  { numero: 101, disponivel: true },
  { numero: 102, disponivel: true },
  { numero: 103, disponivel: false },
]);

const hotel2 = new Hotel("Hotel B", "Local B", [
  { numero: 201, disponivel: true },
  { numero: 202, disponivel: false },
  { numero: 203, disponivel: true },
]);


hotel1.reservarQuarto(101); 
hotel1.reservarQuarto(103); 
hotel1.verificarDisponibilidade(102); 
hotel1.verificarDisponibilidade(104); 
hotel2.reservarQuarto(202); 
hotel2.verificarDisponibilidade(203); 
hotel2.verificarDisponibilidade(205); 
