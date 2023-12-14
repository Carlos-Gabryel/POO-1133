class ChefSecreto {
  #receita = "PF Maroto tem que ter: ";

  adicionarIngrediente(ingrediente) {
    this.#receita += ingrediente + " ";
  }

  revelarReceita() {
    const ingredientesCorretos = ("alho", "arroz", "feijao");

    if (this.#receita.includes(ingredientesCorretos)) {
      return this.#receita;
    } else {
      return "Oops! Parece que você adicionou os ingredientes errados. A receita permanece um segredo!";
    }
  }
}

const chef = new ChefSecreto();
chef.adicionarIngrediente("alho");
chef.adicionarIngrediente("arroz");
chef.adicionarIngrediente("feijao");

console.log(chef.revelarReceita());
