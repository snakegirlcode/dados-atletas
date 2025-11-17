class Atleta {
  constructor (nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria(){
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem Categoria";
    }
  }

  calculaIMC(){
    return this.peso/(this.altura**2);
  }

  calculaMediaValida(){
    let notasOrdenadas = this.notas.toSorted((a, b) => a - b);
    let notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
    let soma = notasValidas.reduce((total, nota) => total + nota, 0);
    return soma / notasValidas.length;
  }

  obtemNomeAtleta(){
    return `Nome: ${this.nome}`;
  }

  obtemIdadeAtleta(){
    return `Idade: ${this.idade}`;
  }

  obtemPesoAtleta(){
    return `Peso: ${this.peso}`;
  }

  obtemAlturaAtleta(){
    return `Altura: ${this.altura}`
  }

  obtemNotasAtleta(){
    return `Notas: ${this.notas.join(', ')}`;
  }

  obtemCategoria(){
    return `Categoria: ${this.calculaCategoria()}`;
  }

  obtemIMC(){
    return `IMC: ${this.calculaIMC()}`;
  }

  obtemMediaValida(){
    return `Média válida: ${this.calculaMediaValida()}`;
  }
}
