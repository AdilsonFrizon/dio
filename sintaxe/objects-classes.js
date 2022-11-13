const adilson = {
    nome: 'Adilson Frizon',
    idade: 31,
    naturalidade: 'Foz do Iguaçu',
    descrever: function() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}'); // pega as chaves de dentro do objeto com ${}
    }
}

console.log(adilson.nome);
console.log(adilson.idade);
console.log(adilson.naturalidade);
console.log(adilson);

adilson.altura = 1.74; // a chave será incrementada no objeto
console.log(adilson);

delete adilson.naturalidade; // a chave será removida do objeto
console.log(adilson);

adilson.descrever();

adilson.nome = 'Adilson'; // muda o valor da cheve com acesso direto
adilson['nome'] = 'Adilson Frizon'; // acesso dinamico através de uma string com o mesmo nome da chave do objeto