class Pessoa {
    nome;
    idade;
    altura;
    naturalidade;
    anoDeNascimento;

    constructor(nome, idade, altura, naturalidade) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.naturalidade = naturalidade;
        this.anoDeNascimento = 2022 - idade;
    }
}

function compararIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}.`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p1.nome} é mais novo que ${p2.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const adilsop1 = new Pessoa('Adilson Frizon', 31, 1.74,  'Foz do Iguaçu');
const renata = new Pessoa('Renata de Lucena Marconatto', 30, 1.65, 'Rio de Janeiro');

compararIdade(adilson, renata);