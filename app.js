// *************** WHAT WE NEED TO DO

// We need to find a way to access the first 151 pokemons weight
// We need to create ranges of weight for all 151 pokemon (e.g., 115 >= strawweight, 125 > x > 115 flyweight, 135 > x > 125 Bantamweight,)
// 145 > x > 135 featherweight, 155 > x > 145 lightweight, etc
// We need our user input to accept weight in pounds
// After weight is inputed we need to display all pokemon within that weight range on screen

const pokemonStrawweight = []
const pokemonFlyweight =[]
const pokemonBantamweight =[]
const pokemonFeatherweight =[]
const pokemonLightweight =[]
const pokemonWelterweight =[]
const pokemonLightheavyweight =[]
const pokemonHeavyweight =[]



function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    // grab the movieTItle
    const pokeName = formData.get("poke-name")
    console.log(pokeName)
        if(pokeName === "string") {
            console.log(pokemonStrawweight)
        }
    fetchPokemon(pokeName)
    // fetch the specified movie
    }

    document.querySelector("form").addEventListener("submit", handleSubmit)
// initial call to populate the first movie

// accept input and spit out proper weight CLASS YOU CAN DO IT




function fetchPokemon(pokeData){ // need parameter
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeData}`
            fetch(url)
                .then((res) => {return res.json()})
                .then((data) => {
                    loadPokemon(data)
                    // console.log(data)
                    const pokemon = {}
                    pokemon.name = data.name
                    pokemon.weight = data.weight
                    pokemon.image = data.sprites['front_default']
                    // console.log(pokemon.weight)
                    if (pokemon.weight < 115) {
                        pokemonStrawweight.push(pokemon)
                        console.log("Strawweight")
                    } else if (pokemon.weight < 125 && pokemon.weight >= 115) {
                        pokemonFlyweight.push(pokemon)
                        console.log("Flyweight")
                    } else if (pokemon.weight < 135 && pokemon.weight >= 125) {
                        pokemonBantamweight.push(pokemon)
                        console.log("Bantamweight")
                    } else if (pokemon.weight < 155 && pokemon.weight >= 135) {
                        pokemonFeatherweight.push(pokemon)
                        console.log("Featherweight")
                    } else if (pokemon.weight < 165 && pokemon.weight >= 155) {
                        pokemonLightweight.push(pokemon)
                        // return pokemonLightweight
                    } else if (pokemon.weight < 195 && pokemon.weight >= 165) {
                        pokemonWelterweight.push(pokemon)
                        // return pokemonWelterweight
                    } else if (pokemon.weight < 225 && pokemon.weight >= 195) {
                        pokemonLightheavyweight.push(pokemon)
                        // return pokemonLightheavyweight
                    } else {
                        pokemonHeavyweight.push(pokemon)
                        // console.log("Heavy weight")
                    }
                    
                        
            })
    } 
    console.log(pokemonStrawweight, pokemonFlyweight, pokemonBantamweight, pokemonFeatherweight, pokemonLightweight, pokemonWelterweight, pokemonLightheavyweight, pokemonHeavyweight)
    // :) have access to all sorted weight classes here WITHIN SCOPE  
    // render pokemon function here matching users input weight class  
    //take string into number and sort based on weight class then render weight class to screen
    function loadPokemon(pokemon){
        const pokediv = document.querySelector(".pokemon-info")
        let pokemonHeight = Math.round(pokemon.height / 3.048)
        pokediv.innerHTML = `
            <img src="${pokemon.sprites.front_default}"/>
            <h1>${pokemon.name}</h1>
            <h2>${pokemon.weight} pounds</h2>
            <h3>${pokemonHeight} feet tall</h3>
        `
    }

    function fetchPokemon2(weightClass){
        const url1 = `https://pogoapi.net/api/v1/pokemon_height_weight_scale.json`
        fetch(url1)
        .then((res) => {return res.json()})
        .then((data) => {  
            // const pokemon = {}
            // pokemon.name = data.name
            // pokemon.image = data.sprites.front_default
            // console.log(pokemon.image)
            console.log(data)
            loadPokemon(pokemonBantamweight)
        }
    )}
    fetchPokemon2()

}
document.querySelector("form").addEventListener("submit", handleSubmit)

fetchPokemon(25)

// render function accepts pokemon array (variables created) as an argument
// <h1>name</h1> <p>weight image</p>