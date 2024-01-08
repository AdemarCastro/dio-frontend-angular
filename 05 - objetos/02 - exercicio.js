
/*
    2) Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos nome, peso e altura. As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)). Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    dados() {
        console.log(`Olá, meu nome é ${this.nome}. Meu peso atual é ${this.peso} kg. Tenho ${this.altura} centimetros de altura. Portanto, meu IMC é ${this.calcularImc().toFixed(2)}.`);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc > 40) {
            console.log(`Seu IMC atual é ${imc.toFixed(2)}, indicando Obesidade Grave (Obesidade Grau 3).`);
        } else if (imc <= 40 && imc >= 30) {
            console.log(`Seu IMC atual é ${imc.toFixed(2)}, indicando Obesidade (Obesidade Grau 2).`);
        } else if (imc <= 29.9 && imc >= 25) {
            console.log(`Seu IMC atual é ${imc.toFixed(2)}, indicando Sobrepeso (Obesidade Grau 1).`);
        } else if (imc <= 24.9 && imc >= 18.5) {
            console.log(`Seu IMC atual é ${imc.toFixed(2)}, dentro da faixa de peso Normal.`);
        } else {
            console.log(`Seu IMC atual é ${imc.toFixed(2)}, indicando Magreza.`);
        }
    }
};

pessoa01 = new Pessoa('Ademar', 60, 1.65);
pessoa01.dados();
pessoa01.classificarImc();

pessoa02 = new Pessoa('José', 80, 1.75);
pessoa02.dados();
pessoa02.classificarImc();