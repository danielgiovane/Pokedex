let card = document.querySelector('.card');

const getUrlPokemon = (id) => ` https://pokeapi.co/api/v2/pokemon/${id} `;

const generatePokemonPromises = () => Array(201).fill().map((item, index) =>
  fetch(getUrlPokemon(index + 1)).then(handleDataPokemon)
);

const fetchPokemon = () => {
  const arrPokemons = generatePokemonPromises();
  Promise.all(arrPokemons)
    .then(pokemons => {
      card.innerHTML = template(pokemons)
    })
};

fetchPokemon();


function handleDataPokemon(res) {
  return res.ok ? res.json() : Promise.reject(statusText);
};

function filterName(name) {
  let newName = name[0].toUpperCase() + name.slice(1);
  return newName;
};

const template = (pokemons) => {
  return pokemons.reduce((acc, pokemon) => {
    const elTypes = pokemon.types.map(typeInfo => typeInfo.type.name)
    return acc +=
      ` <div class="card1 ${elTypes[0]}">
          <img class="card-image " alt="${pokemon.name}"src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
          <div class="container">
            <h3 class="nome">${filterName(pokemon.name)}</h3>
            <p class="info">Tipo: ${elTypes.join(' | ')}</p>
          </div>
        </div>`
  }, '');
};
