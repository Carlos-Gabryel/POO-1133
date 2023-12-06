class Telefone {
  constructor(marca, modelo, numeroSerie) {
    this.marca = marca;
    this.modelo = modelo;
    this.numeroSerie = numeroSerie;
  }

  fazerChamada(numero) {
    console.log(`Chamando o número ${numero} no telefone ${this.modelo}`);
  }

  enviarMensagem(numero, mensagem) {
    console.log(
      `Enviando mensagem "${mensagem}" para o número ${numero} no telefone ${this.modelo}`
    );
  }
}

const telefone1 = new Telefone("Samsung", "Galaxy Z Flip 5", "123456789");
telefone1.fazerChamada("987654321");
telefone1.enviarMensagem("987654321", "Olá, tudo bem?");

const telefone2 = new Telefone("Apple", "iPhone (ECA) 12", "987654321");
telefone2.fazerChamada("123456789");
telefone2.enviarMensagem("123456789", "Oi, como vai?");
