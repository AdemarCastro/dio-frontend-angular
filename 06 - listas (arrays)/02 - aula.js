const notas = [];
let somaNota = 0;

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

// console.log(notas.length); // tamanho da lista

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];

    somaNota = somaNota + nota;
}

const media = somaNota / notas.length;

console.log(`A sua média é ${media}.`);