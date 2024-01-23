const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 5;
let offset = 0;

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function firstCharacterCapitalized(pokemon) {
    // ".charAt(0)" -> Captura o primeiro caractere da String
    // ".slice(1)" -> Captura todos os caracteres a partir do índice 1 da String
    return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
}

function loadPokemonItens(offset, limit) {
    // function convertPokemonToLi(pokemon) {
    //     return `
    //     <li class="pokemon ${pokemon.type}">
    //         <span class="number">#${pokemon.number}</span>
    //         <span class="name">${firstCharacterCapitalized(pokemon)}</span>
    //
    //         <div class="detail">
    //             <ol class="types">
    //                 ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    //             </ol>
    //
    //             <img src="${pokemon.photo}" alt="${firstCharacterCapitalized(pokemon)}">
    //         </div>
    //     </li>
    // `
    // }

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
           <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${firstCharacterCapitalized(pokemon)}</span>
    
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
    
                    <img src="${pokemon.photo}" alt="${firstCharacterCapitalized(pokemon)}">
                </div>
           </li>
        `).join('')
        pokemonList.innerHTML += newHtml;
    });
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItens(offset, limit);
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