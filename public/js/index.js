let card = document.querySelector('.card');

const getUrlPokemon = (id) => ` https://pokeapi.co/api/v2/pokemon/${id} `;

const handleDataOfPokemons = (res) => res.ok ? res.json() : Promise.reject(statusText);

const insertPokemonPage = (pokemon) => card.innerHTML = template(pokemon)

const generatePokemonPromises = () => Array(201).fill().map((item, index) =>
  fetch(getUrlPokemon(index + 1)).then(handleDataOfPokemons)
);

const arrPokemons = generatePokemonPromises();
Promise.all(arrPokemons)
  .then(insertPokemonPage)


const filterName = (name) => {
  let newName = name[0].toUpperCase() + name.slice(1);
  return newName;
};

const template = (pokemons) => pokemons.reduce((acc, { name, types, id }) => {
  const elTypes = types.map(typeInfo => typeInfo.type.name)
  return acc +=
    ` <div class="card1 ${elTypes[0]}">
          <img class="card-image " alt="${name}"src="https://pokeres.bastionbot.org/images/pokemon/${id}.png"/>
          <div class="container">
            <h3 class="nome">${filterName(name)}</h3>
            <p class="info">Tipo: ${elTypes.join(' | ')}</p>
          </div>
        </div>`
}, '');
