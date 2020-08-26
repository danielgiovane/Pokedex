let card = document.querySelector('.card');

async function handleDados(url) {
  let response = await fetch(url);
  let responseJson = await response.json();
  return responseJson;
}

let dados = handleDados('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');

dados.then((data) => {
  for (let i in data.results) {
    let dadosPokemons = data.results[i];
    template(dadosPokemons);
  }
});

function filterName(name) {
  let newName = name[0].toUpperCase() + name.slice(1);
  return newName;
}

function template(dadosPokemons) {
  card.innerHTML += `<h3>${filterName(dadosPokemons.name)}</h3>`
  card.innerHTML += `<small>${async function () {
    let url = await handleDados(dadosPokemons.url);
  }()
    }
  </small>`
}
