// 1) Crie um programa que dado um número imprima a sua tabuada

function tabuada(num) {

    console.log('********* SOMA *********');

    for (let i = 0; i < 11; i++) {
        let soma = 0;

        console.log (`${i} - ${num} + ${i} = ${num + i};`);
    }

    console.log('\n********* SUBTRAÇÃO *********');

    for (let i = 0; i < 11; i++) {
        let subtracao = 0;

        console.log (`${i} - ${num} - ${i} = ${num - i};`);
    }

    console.log('\n********* MULTIPLICAÇÃO *********');

    for (let i = 0; i < 11; i++) {
        let multiplicacao = 0;

        console.log (`${i} - ${num} * ${i} = ${num * i};`);
    }

    console.log('\n********* DIVISÃO *********');

    for (let i = 0; i < 11; i++) {
        let divisao = 0;

        console.log (`${i} - ${num} / ${i} = ${(num / i).toFixed(2)};`);
    }
}

tabuada(5);