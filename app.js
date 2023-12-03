// *************** WHAT WE NEED TO DO

// We need to find a way to access the first 151 pokemons weight
// We need to create ranges of weight for all 151 pokemon (e.g., 115 >= strawweight, 125 > x > 115 flyweight, 135 > x > 125 Bantamweight,)
// 145 > x > 135 featherweight, 155 > x > 145 lightweight, etc
// We need our user input to accept weight in pounds
// After weight is inputed we need to display all pokemon within that weight range on screen





function fetchPokemon(){
        const url = `https://pokeapi.co/api/v2/pokemon/1`
        fetch(url)
            .then((res) => {return res.json()})
            .then((data) => {
                console.log(data)
                const pokemon = {}
                pokemon.name = data.name
                pokemon.weight = data.weight
                pokemon.image = data.sprites['front_default']
                console.log(pokemon)
            })
        }
        fetchPokemon()