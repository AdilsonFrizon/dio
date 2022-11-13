class Carros {
    marca;
    modelo;
    cor;
    anoDeFabricacao;
    mediaPorKm;

    constructor(marca, modelo, cor, anoDeFabricacao, mediaPorKm) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.anoDeFabricacao = anoDeFabricacao;
        this.mediaPorKm = mediaPorKm;
    }

    calcularValorViagem(distEmKm, valorCombustivel) {
        return distEmKm * this.mediaPorKm * valorCombustivel;
    }

}

const car1 = new Carros('Chevrolet', 'Chevette SL', 'Dourado', 1982, 1/11);
const car2 = new Carros('Volkswagen', 'Polo Hatch', 'Azul Marinho', 2004, 1/9);
const car3 = new Carros('Fiat', '147', 'Branco', 1978, 1/13);

console.log(car1.calcularValorViagem(420, 5.09));
console.log(car2.calcularValorViagem(420, 5.09));
console.log(car3.calcularValorViagem(420, 5.09));