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

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); // pega as chaves de dentro da classe com ${}, deve estar entre crases
    }
}

const adilson = new Pessoa('Adilson Frizon', 31, 'Foz do Iguaçu');
const renata = new Pessoa('Renata de Lucena Marconatto', 30, 'Rio de Janeiro');

console.log(adilson);
console.log(renata);

adilson.descrever();
renata.descrever();
 

/* sem constructor
class Pessoa {
    nome;
    idade;
    altura;
    naturalidade;

    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}'); // pega as chaves de dentro da classe com ${}
    }
}

const adilson = new Pessoa;
adilson.nome = 'Adilson Frizon';
adilson.idade - 31;
adilson.naturalidade = 'Foz do Iguaçu';

const renata = new Pessoa;
renata.nome = 'Renata de Lucena Marconatto';
renata.idade = 30;
renata.naturalidade = 'Rio de janeiro';

console.log(adilson);
console.log(renata);

adilson.descrever();
renata.descrever();
 */