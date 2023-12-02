function fetchPokemon(){
    const url = `https://pokeapi.co/api/v2/pokemon/4`
    fetch(url)
    .then((res) => {return res.json()})
    .then((data) => {
        console.log(data)
        const pokemon = {}
        pokemon.name = data.name
        // pokemon.height = data.height
        pokemon.weight = data.weight
        pokemon.image = data.sprites['front_default']
        console.log(pokemon)
        // let pokemonBMI = pokemon.weight/pokemon.height
        // console.log(pokemonBMI)
    })
}

fetchPokemon()

