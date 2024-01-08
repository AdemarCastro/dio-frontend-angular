const pessoa = {
    nome: 'Ademar Castro',
    idade: 25,
    // Uma função dentro de um objeto é um método
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const atributo = 'idade';

console.log(pessoa[atributo]);
console.log(pessoa['nome']);

// pessoa.descrever();

// pessoa.nome = 'Jorge';
// pessoa.idade = 30;

// pessoa.descrever = function() {
//     console.log(`Meu nome é ${this.nome}`);
// }

// pessoa.descrever();

// ademar.altura = 1.65;

// delete ademar.nome;

// console.log(ademar);