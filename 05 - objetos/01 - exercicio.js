/*
    1 - Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado. Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    modelo;
    cor;
    gastoMedioCombustivelKm;

    constructor (marca, modelo, cor, gastoMedioCombustivelKm) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.gastoMedioCombustivelKm = gastoMedioCombustivelKm;
    };

    calculaValorPercurso(percursoKm, valorCombustivelLitro) {
        const gastoTotal = (percursoKm / this.gastoMedioCombustivelKm) * valorCombustivelLitro;
        console.log(`O gasto total com combustível nesta viagem será R$ ${gastoTotal.toFixed(2)}.`);
    }
};

car01 = new Carro('Fiat', 'Toro Turbo 2.0', 'Preto', 11);
car02 = new Carro('Honda', 'Civic 2024', 'Prata', 9);
car03 = new Carro('Toyora', 'Corolla 2024', 'Azul', 10);

car01.calculaValorPercurso(100, 5.65);
car02.calculaValorPercurso(100, 5.65);
car03.calculaValorPercurso(100, 5.65);

