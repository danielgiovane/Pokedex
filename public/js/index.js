let card = document.querySelector('.card');
const arrPokemons = [];

const getUrlPokemon = (id) => ` https://pokeapi.co/api/v2/pokemon/${id} `;

for (let i = 1; i <= 150; i++) {
  arrPokemons.push(fetch(getUrlPokemon(i)).then(handleData))
}

Promise.all(arrPokemons).then(pokemons => {
    template(pokemons)
})

function handleData(res) {
  return res.ok ? res.json() : Promise.reject(statusText);
}


// let dados = load(URL);

// dados.then((data) => {
//   for (let i in data.results) {
//     let dadosPokemons = data.results[i];
//     template(dadosPokemons);
//   }
// });


function filterName(name) {
  let newName = name[0].toUpperCase() + name.slice(1);
  return newName;
}

const template = (pokemons) => {
  return pokemons.reduce((acc, pokemon) => {
      acc += 
      ` <div class="card1">
          <img src="${pokemon.sprites}"></img>  
          <div class="container">
            <h3>${filterName(pokemon.name)}</h3>
            <p> tipo: ${pokemon.types.map(type => console.log(type.type))}</p>
          </div>
        </div>`
  }, '')
}

// async function template(dadosPokemons) {
//   let dadosUrl = await load(dadosPokemons.url);
//   dadosImage.currentImage = dadosUrl.sprites.front_default;

//   card.innerHTML +=
//     `<div class="card1">
//       <img src="${dadosImage.currentImage}"></img>
//        <div class="container">
//           <h3>${filterName(dadosPokemons.name)}</h3>
//           <p> tipo: ${dadosUrl.types.map(type => type.type.name)}</p>
//       </div>
//    </div>`
//   criandoEvento('.card1', dadosUrl)
// }


function criandoEvento(seletor, dadosUrl) {
  let card1 = document.querySelectorAll(seletor);
  card1.forEach((card) => {
    card.addEventListener('click', (e) => {
      mudarSprite(e, dadosUrl)
    })
  })
}

const dadosImage = {
  isFront: true,
  currentImage: ''
}


function mudarSprite(e, dadosUrl) {
  console.log('Event: ', e.target.src)
  console.log('DadosURL: ', dadosUrl.sprites.front_default);

}
