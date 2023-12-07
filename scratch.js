




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
let pokemonWeight = Math.round(pokemon.weight / 4.536)
pokediv.innerHTML = `
    <div class="poke-card">
        <img src="${pokemon.sprites.front_default}" class="card-photo" />
        <div class="card-name">Name: ${pokemon.name}</div>
        <div class="card-weight">Weight: ${pokemonWeight} pounds</div>
        <div class="card-height">Height: ${pokemonHeight} feet tall</div>
        <div class="card-types">Type: ${pokemon.types[0].type.name}</div>
    </div>
`
}


function handleSubmit(event) {
event.preventDefault()
const form = event.target
const formData = new FormData(form)

const pokeName = formData.get("poke-name") // this is the data it is getting from the form and pushing as an argument to get the users request
// fetch the specified pokemon
console.log(pokeName)
fetchPokemon(pokeName)
}

document.querySelector(".form1").addEventListener("submit", handleSubmit)
// initial call to populate the first pokemon
fetchPokemon(25)


//************* 2 API'S */



function fetchPokemon2(pokeName2){
    const url1 = `https://pogoapi.net/api/v1/pokemon_height_weight_scale.json`
    fetch(url1)
    .then((res) => {return res.json()})
    .then((data) => {  
        loadPokemon2(data, pokeName2)
        // const pokemon = {}
        // pokemon.name = data.name
        // pokemon.image = data.sprites.front_default
        // console.log(pokemon.image)
        // console.log(data)
    }
)}


// Need to find a way to iterate over all indeces of array with value of i 

// array > object > filter c specific prop > given method filter used to sort what we're looking for 
// FILTER LOOKS TO RETURN BOOLEAN EXPRESSION (truthy of falsey)

function loadPokemon2(pokemon, pokeName2){
    const $pokediv2 = $(".pokemon-info2")
    const filteredPokemon = pokemon.filter((pokeObject) => {
        return pokeObject.form === "Normal"
    })
    filteredPokemon.forEach(item => {
    if(item.pokedex_weight < pokeName2) {
        $pokediv2.append(`
            <table style="width:100%">
                <tr>
                    <th>Name</th>
                    <th>Weight</th>
                </tr>
                <tr>
                    <td>${item.pokemon_name}</td>
                    <td>${item.pokedex_weight/2.2} </td>
                </tr>
            </table>
        `) 
    }
    })
    // Array.from(new Set(pokemon))
    console.log(filteredPokemon)
    // pokemon.forEach(item => {
        // if(item.pokedex_weight < pokeName2) {
        //     $pokediv2.append(`
        //     <div>${item.pokemon_name}</div>
        //     <div>${item.pokedex_weight} pounds</div>
        //     `) 
        // }
    // })
} 


function handleSubmit2(event) {
event.preventDefault()
const form2 = event.target
const formData2 = new FormData(form2)
// grab the movieTItle
let pokeName2 = formData2.get("poke-name2")
// console.log(typeof pokeName2)
// fetch the specified movie
fetchPokemon2(pokeName2)

}

function clearFrom() {
    const pokediv2 = document.querySelector(".pokemon-info2")
    pokediv2.remove().reload()
}


document.querySelector(".form2").addEventListener("submit", handleSubmit2) 
document.querySelector(".reset").addEventListener("click", clearFrom)

// initial call to populate the first movie


// need to nest promise in main promise and 
// make each pokemon its own object in array and attach appropriate key-value pairs i want