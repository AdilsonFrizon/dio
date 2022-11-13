function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarMaioridade(idade) {
    if(idade >= 18) {
        return escrevaMeuNome('Adilson') + ' é maior de idade.';
    } else {
        return escrevaMeuNome('Adilson') + ' é menor de idade.';
    } 
}

console.log(verificarMaioridade(31)); 