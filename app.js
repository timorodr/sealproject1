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



function fetchPokemon(){
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
            fetch(url)
                .then((res) => {return res.json()})
                .then((data) => {
                    console.log(data)
                    const pokemon = []
                    pokemon.name = data.name
                    pokemon.weight = data.weight
                    pokemon.image = data.sprites['front_default']
                    console.log(pokemon.weight)
                    if (pokemon.weight < 115) {
                        pokemonStrawweight.push(pokemon.name, pokemon.weight)
                        console.log("Strawweight")
                    } else if (pokemon.weight < 125 && pokemon.weight >= 115) {
                        pokemonFlyweight.push(pokemon.name, pokemon.weight)
                        console.log("Flyweight")
                    } else if (pokemon.weight < 135 && pokemon.weight >= 125) {
                        pokemonBantamweight.push(pokemon.name, pokemon.weight)
                        console.log("Bantamweight")
                    } else if (pokemon.weight < 155 && pokemon.weight >= 135) {
                        pokemonFeatherweight.push(pokemon.name, pokemon.weight)
                        console.log("Featherweight")
                    } else if (pokemon.weight < 165 && pokemon.weight >= 155) {
                        pokemonLightweight.push(pokemon.name, pokemon.weight)
                        console.log("Lightweight")
                    } else if (pokemon.weight < 195 && pokemon.weight >= 165) {
                        pokemonWelterweight.push(pokemon.name, pokemon.weight)
                        console.log("Welterweight")
                    } else if (pokemon.weight < 225 && pokemon.weight >= 195) {
                        pokemonLightheavyweight.push(pokemon.name, pokemon.weight)
                        console.log("Light heavyweight")
                    } else {
                        pokemonHeavyweight.push(pokemon.name, pokemon.weight)
                        console.log("Heavy weight")
                    }
                    
                        
            })
    } console.log(pokemonStrawweight, pokemonFlyweight, pokemonBantamweight, pokemonFeatherweight, pokemonLightweight, pokemonWelterweight, pokemonLightheavyweight, pokemonHeavyweight)
        
}
    fetchPokemon()