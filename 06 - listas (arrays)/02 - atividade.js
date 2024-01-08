// 2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

function numeroPar(numeros) {

    console.log('***** LISTA DOS NÚMEROS PARES *****')

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] % 2 === 0) {
            console.log(`O número ${numeros[i]} é par.`);
        } else {
            console.log(`O número ${numeros[i]} é impar.`);
        }
    }
}

const numeros = [1, 3, 4, 5, 6, 8, 10, 20, 22, 33, 35];

numeroPar(numeros);