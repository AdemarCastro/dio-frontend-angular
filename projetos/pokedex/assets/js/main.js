const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join(' ')}
                    <li class="type">poison</li>
                </ol>

                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
})

// O que é Promise -> Uma Promise (promessa) é um objeto em JavaScript que representa a eventual conclusão ou falha de uma operação assíncrona.

// 1 - Pending (Pendente): Estado inicial, quando a Promise está em execução, mas ainda não foi concluída ou rejeitada.

// 2 - Fulfilled (Realizada): A operação assíncrona foi bem-sucedida e a Promise foi concluída com sucesso. Nesse estado, a Promise retorna um valor.

// 3 - Rejected (Rejeitada): A operação assíncrona falhou e a Promise foi rejeitada. Nesse estado, a Promise retorna um motivo (geralmente um objeto de erro) que indica por que a operação falhou.

// SÍNCRONA:

// * Bloqueante: Em operações síncronas, o código é executado de maneira sequencial, linha por linha. Se uma operação leva tempo para ser concluída, o código aguarda até que essa operação seja finalizada antes de continuar a execução.

// * Tempo de Espera: Se houver uma operação demorada, como uma chamada de rede ou uma leitura de arquivo, a execução do programa ficará parada durante esse tempo, o que pode tornar a aplicação menos responsiva.

// ASSINCRONA

// * Não Bloqueante: Em operações assíncronas, o código continua a ser executado mesmo enquanto uma operação está em andamento. Isso permite que outras operações sejam realizadas sem esperar que a operação assíncrona seja concluída.

// * Callback, Promises ou Async/Await: Para lidar com operações assíncronas, você pode usar callbacks (antiga abordagem), Promises ou a sintaxe mais moderna Async/Await.