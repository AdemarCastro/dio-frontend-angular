
// Definir a Classe Pessoa para que ela possa ser instanciada - Instancia = Objeto
// Classe é a definição do que deve ser aquele Objeto
// Instância é uma ocorrẽncia do Objeto em si
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const ademar = new Pessoa('Ademar', 25);
const renan = new Pessoa('Renan', 30);

compararPessoa(ademar, renan);

// const ademar = new Pessoa('Ademar', 25);
// const renan = new Pessoa('Renan', 30);

// console.log(ademar);
// console.log(renan);

// const ademar = new Pessoa();
// ademar.nome = 'Ademar Castro';
// ademar.idade = 25;

// console.log(ademar);

// const vitor = new Pessoa();
// vitor.nome = 'Vitor Jorge';
// vitor.idade = 29;

// console.log(vitor);

// ademar.descrever();
// vitor.descrever();