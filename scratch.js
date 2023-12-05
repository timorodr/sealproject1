




// function fetchPokemon(){
//         const url = `http://pokeapi.co/api/v2/pokemon/1/`
        // const url = `https://pogoapi.net/api/v1/pokemon_height_weight_scale.json`
//             fetch(url)
//                 .then((res) => {return res.json()})
//                 .then((data) => {  
//                     // loadPokemon(data)
//                     // const pokemon = {}
//                     // pokemon.name = data.name
//                     // pokemon.image = data.sprites.front_default
//                     // console.log(pokemon.image)
//                     console.log(url)
//                 }
//             )}



// function loadPokemon(pokemon){
//     const pokediv = document.querySelector(".pokemon-info")
//     let pokedexWeight = Math.round(pokemon[2].pokedex_weight * 2.2)
//     let pokemonHeight = Math.round(pokemon[2].pokedex_height * 3.2)
//     pokediv.innerHTML = `
//         <img src=""/>
//         <h1>${pokemon[2].pokemon_name}</h1>
//         <h2>${pokemon[2].pokedex_weight} pounds</h2>
//         <h3>${pokemon[2].pokedex_height} feet tall</h3>
//     `
// }


// function handleSubmit(event) {
//     event.preventDefault()
//     const form = event.target
//     const formData = new FormData(form)
//     // grab the movieTItle
//     const pokeName = formData.get("poke-name")
//     // fetch the specified movie
//     fetchPokemon(pokeName)
// }

// document.querySelector("form").addEventListener("submit", handleSubmit)
// // initial call to populate the first movie
// fetchPokemon(25)






// ***************** WORKING POKEDEX




function fetchPokemon(userInput){
    const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`
    // const url = `https://pogoapi.net/api/v1/pokemon_height_weight_scale.json`
        fetch(url)
            .then((res) => {return res.json()})
            .then((data) => {  
                loadPokemon(data)
                // const pokemon = {}
                // pokemon.name = data.name
                // pokemon.image = data.sprites.front_default
                // console.log(pokemon.image)
                console.log(url)
            }
        )}



function loadPokemon(pokemon){
const pokediv = document.querySelector(".pokemon-info")
let pokemonHeight = Math.round(pokemon.height / 3.048)
pokediv.innerHTML = `
    <img src="${pokemon.sprites.front_default} "/>
    <h1>${pokemon.name}</h1>
    <h2>${pokemon.weight} pounds</h2>
    <h3>${pokemonHeight} feet tall</h3>
`
}


function handleSubmit(event) {
event.preventDefault()
const form = event.target
const formData = new FormData(form)

const pokeName = formData.get("poke-name")
// fetch the specified movie
console.log(pokeName)
fetchPokemon(pokeName)
}

document.querySelector("form").addEventListener("submit", handleSubmit)
// initial call to populate the first movie
fetchPokemon(25)


//************* 2 API'S */



function fetchPokemon2(){
    const url1 = `https://pogoapi.net/api/v1/pokemon_height_weight_scale.json`
    fetch(url1)
    .then((res) => {return res.json()})
    .then((data) => {  
        // const pokemon = {}
        // pokemon.name = data.name
        // pokemon.image = data.sprites.front_default
        // console.log(pokemon.image)
        console.log(data)
        loadPokemon2(data)
    }
)}
fetchPokemon2()



function loadPokemon2(pokemon){
    const pokediv2 = document.querySelector(".pokemon-info2")
    let pokemonWeight = Math.round(pokemon[0].pokedex_weight * 2.2)
    console.log(pokemonWeight)
        pokediv2.innerHTML = `
        <div>${pokemon[0].pokemon_name}</div>
        <div>${pokemonWeight} pounds</div>
        `
}


function handleSubmit2(event) {
event.preventDefault()
const form2 = event.target
const formData2 = new FormData(form2)
// grab the movieTItle
const pokeName2 = formData2.get("poke-name2")
// fetch the specified movie
fetchPokemon2(pokeName2)
}

document.querySelector(".form2").addEventListener("submit", handleSubmit2)
// initial call to populate the first movie
fetchPokemon2(25)


// need to nest promise in main promise and 
// make each pokemon its own object in array and attach appropriate key-value pairs i want