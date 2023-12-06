class EstudioArteDigital {
  constructor(nome, equipamentos) {
    this.nome = nome;
    this.equipamentos = equipamentos;
    this.obrasDeArte = [];
    this.contadorObrasCriadas = 0;
  }

  criarArteDigital() {
    this.contadorObrasCriadas++;
  }

  exporObras() {
    console.log("Obras de arte expostas:");
    this.obrasDeArte.forEach((obra) => {
      console.log(obra);
    });
    this.obrasDeArte = [];
    this.contadorObrasCriadas = 0;
  }
}

const estudio = new EstudioArteDigital("Meu Estúdio", ["Computador", "Tablet"]);
console.log(estudio.nome);
console.log(estudio.equipamentos);

estudio.criarArteDigital();
estudio.criarArteDigital();
console.log(estudio.contadorObrasCriadas);

estudio.obrasDeArte.push("A Mona Lisa");
estudio.obrasDeArte.push("O Grito na Dedaria");
estudio.exporObras();
console.log(estudio.obrasDeArte);
console.log(estudio.contadorObrasCriadas);
