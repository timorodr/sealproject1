

// ***************** WORKING POKEDEX

// A function created to fetch the data in our pokemon API with endpoint of pokemon name or ID
// Not truly the users input but helped me remember what end point is
// receiving json data object to utilize
// calling our pokemon object in this function as well


function fetchPokemon(userInput){
    const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`
        fetch(url)
            .then((res) => {return res.json()})
            .then((data) => {  
                loadPokemon(data)
                console.log(url)
            }
        )}


// A function created that passes pokemon as a parameter (all the data for specific pokemon in an object)
// Created a variable to target a div by its class and later injecting other divs/images and properties
// from the pokemon object.
// Variables created to convert height from decimeters to feet and hectorgrams to pounds



function loadPokemon(pokemon){
const pokediv = document.querySelector(".pokemon-info")
let pokemonHeight = Math.round(pokemon.height / 3.048)
let pokemonWeight = Math.round(pokemon.weight / 4.536)
pokediv.innerHTML = `
    <div class="poke-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUn933j-_dzxMs9h_dv4Jh0E4z-mX03Mg_Q&usqp=CAU" class="card-background" />
        <img src="${pokemon.sprites.front_default}" class="card-photo" />
        <div class="card-name">Name: ${pokemon.name}</div>
        <div class="card-weight">Weight: ${pokemonWeight} pounds</div>
        <div class="card-height">Height: ${pokemonHeight} feet tall</div>
        <div class="card-types">Type: ${pokemon.types[0].type.name}</div>
    </div>
`
console.log(pokemon)
}



// A function created to handle our form submissions from the user with event passed as parameter
// Prevents the refreshing from the page from the form submission
// Created a variable to grab the form from the event
// Created a variable to access the form data


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
//event listener to the form on submission our handleSubmit function will run
// initial call to populate the first pokemon
fetchPokemon(25)


//************* 2 API'S */



function fetchPokemon2(pokeName2){
    const url1 = `https://pogoapi.net/api/v1/pokemon_height_weight_scale.json`
    fetch(url1)
    .then((res) => {return res.json()})
    .then((data) => {  
        loadPokemon2(data, pokeName2)
    }
)}


// Need to find a way to iterate over all indeces of array with value of i 

// array > object > filter c specific prop > given method filter used to sort what we're looking for 
// FILTER LOOKS TO RETURN BOOLEAN EXPRESSION (truthy of falsey)

function loadPokemon2(pokemon, pokeName2){
    const $pokediv2 = $(".pokemon-info2") // jQuery here
    const filteredPokemon = pokemon.filter((pokeObject) => { // PROUD OF THIS filters through array of all truthy values matching "Normal" since we had duplicates
        return pokeObject.form === "Normal"
    })
    filteredPokemon.forEach(item => { // forEach iterates over each index with conditional that turns strings into numbers and creates a range of +- 5 pounds based on users input of weight
    if(Number(item.pokedex_weight * 2.2) > Number(pokeName2)-5 && Number(item.pokedex_weight * 2.2) < (Number(pokeName2)+5)) {
        $pokediv2.append(` 
            <table style="width:100%">
                <tr>
                    <th>Name</th>
                    <th>Weight</th>
                </tr>
                <tr>
                    <td>${item.pokemon_name}</td>
                    <td>${Math.round(item.pokedex_weight * 2.2)} pounds </td>
                </tr>
            </table>
        `) // A table is created with name and weight values
        console.log($pokediv2)
    }
    })
    console.log(filteredPokemon)
   
} 


function handleSubmit2(event) {
event.preventDefault()
const form2 = event.target
const formData2 = new FormData(form2)
let pokeName2 = formData2.get("poke-name2")
// console.log(typeof pokeName2)
fetchPokemon2(pokeName2)

}

function clearFrom() {
    const pokediv2 = document.querySelector(".pokemon-info2")
    pokediv2.remove().reload()
}


document.querySelector(".form2").addEventListener("submit", handleSubmit2) 
document.querySelector(".reset").addEventListener("click", clearFrom)
