
const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

function calculaMaior() {
    let maior = 0;

    for (let i = 0; i < entradas.length; i++) {
        if (entradas[i] > maior) {
            maior = entradas[i];
        }
    }

    return maior;
}

// Outra forma de fazer
// module.exports.gets = gets;

module.exports = { gets, print, calculaMaior };