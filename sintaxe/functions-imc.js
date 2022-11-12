function main() {
    const peso = 78;
    const altura = 1.74;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));

}

function calcularImc(peso, altura) {
    imc = peso / (altura * altura);
    return imc;
    
}

function classificarImc(imc) {
    if(imc > 40) {
        return 'Obesidade grave.';
    }else if(imc <= 40 && imc > 30) {
        return 'Obeso.';
    }else if(imc <= 30 && imc > 25) {
        return 'Acima do peso.';
    }else if(imc <= 25 && imc > 18.5) {
        return 'Peso normal.';
    }else if(imc <= 18.5 && imc > 0) {
        return 'Abaixo do peso.';
    }else {
        return 'Peso inválido.';
    }
}

main();

/*
pode ser feito de maneira diferente excluindo o main(); da linha 32 e deixando main() deste jeito:

(function main() {
    const peso = 78;
    const altura = 1.74;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));

})();

sendo uma função que se autoexecuta e só existe nesse bloco
*/