let card = document.querySelector('.card');

async function load(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

let dados = load('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0');

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

async function template(dadosPokemons) {
  let dadosUrl = await load(dadosPokemons.url);
  card.innerHTML +=
   `<div class="card1">
      <img src="${dadosUrl.sprites.front_default}"></img>
       <div class="container">
          <h3>${filterName(dadosPokemons.name)}</h3>
          <p> tipo: ${dadosUrl.types.map(type => type.type.name)}</p>
      </div>
   </div>`
}

// const dadosImage = {
//   isFront: true,
//   currentImg: ''
// }

// let card1 = document.querySelector('.card1');
// card1.addEventListener('click', function(){
//   mudarSprite(dadosPokemons);
// })
// function mudarSprite(dadosPokemons){
//   if(dadosImage.isFront){
//     dadosImage.isFront = false;
//     dadosImage.currentImg = dadosPokemons.sprites.back_default;
//   }else {
//     dadosImage.isFront = true;
//     dadosImage.currentImg = dadosPokemons.sprites.front_default;
//   }
// }


// ${async function () {
//   let url = await handleDados(dadosPokemons.url);
//   let dadosUrl = new Object();
//   dadosUrl.urlTypes = url.types;
//   dadosUrl.backDefault = url.sprites.back_default;
//   dadosUrl.FrontDefault = url.sprites.front_default;
//   console.log(dadosUrl.FrontDefault)
// }()
//   }
