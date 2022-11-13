const precoNormal = 420;
const tiposDeCompra = ['Débito', 'Dinheiro', 'Pix', 'Até 2x', 'Mais de 3x'];
const tipoDeCompra = 'Débito';

function identificaTipoDeCompra(tipoDeCompra) {
    if(tipoDeCompra === 'Débito') {
        const aVistaDebito = precoNormal * 0.9;
        return('O preço é ' + aVistaDebito);
    }else if(tipoDeCompra === 'Dinheiro' || tipoDeCompra === 'Pix') {
        const aVistaDinheiroPix = precoNormal * 0.85;
        return('O preço é ' + aVistaDinheiroPix);
    }else if(tipoDeCompra === 'Até 2x') {
        const ate2P = (precoNormal / 2) + (precoNormal / 2);
        return('O preço é ' + ate2P);
    }else if(tipoDeCompra === 'Mais de 3x') {
        const mais3P = precoNormal * 1.1;
        return('O preço é ' + mais3P);
    }else {
        return('Forma de compra inválida');
    }
}

console.log(identificaTipoDeCompra(tipoDeCompra));