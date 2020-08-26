let card = document.querySelector('.card');

const options = { method: 'GET' };
let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

const pokemons = [];
async function handleDados() {
  let response = await fetch(url, options);
  let responseJson = await response.json();
  return responseJson;
}

let dados = handleDados();
dados.then((data) => {
  for (let i in data.results) {
    let dadosPokemons = data.results[i];
    card.innerHTML += `<h4>${filterName(dadosPokemons.name)}</h4>`;
    card.innerHTML += `<small>${dadosPokemons.url}</small>`
  }
});

function filterName(name){
  let newName = name[0].toUpperCase() + name.slice(1);
  return newName;
}



