const valorEtanol = 4.19;
const valorGasool = 5.09;
const kmPorLitroEtanol = 28;
const kmPorLitroGasool = 32;
const distEmKm = 420;
const tipoCombustivel = 'Etanol';

const consumoLitrosEtanol = distEmKm / kmPorLitroEtanol;
const consumoLitrosGasool = distEmKm / kmPorLitroGasool;

if(tipoCombustivel === 'Etanol') {
    const valorGastoEtanol = consumoLitrosEtanol * valorEtanol;
    console.log('O gasto com etanol é ' + valorGastoEtanol);
} else if(tipoCombustivel === 'Gasool'){
    const valorGastoGasool = consumoLitrosGasool * valorGasool;
    console.log('O gasto com gasool é ' + valorGasool);
} else {
    console.log('O combustível não é válido.');
}