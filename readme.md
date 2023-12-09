# Project
### By Somebody

DEPLOYED SITE: [Click here](https://sealproject1-gules.vercel.app/)

## Description on Project


> I am creating a searchable pokedex and Pokemon fight club app based on weight class. The user will input their own weight and based on that, a host of pokemon in your weight class will be the pokemon you would have to fight if you were a pokemon.

## Details about the API

> Both of the API's I am using are pokemon API's with a wide-range of pokemon attributes for each pokemon. Both API's require no authenication to utilize. I am using 2 API's because the first API has an end point of either pokemon name or ID. The second API requires no end point and allow me access to all the data for all pokemon without specific endpoint.


- `https://pokeapi.co/api/v2/pokemon/`: This returns a json object with all the different pokemon.
`https://pogoapi.net/api/v1/pokemon_height_weight_scale.json`: This returns a json array of objects

Sample Fetch/Ajax called:
```js
const url = "https://pokeapi.co/api/v2/pokemon/"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))

const url = "https://pogoapi.net/api/v1/pokemon_height_weight_scale.json"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json
{
  "count": 1292,
  "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
      "name": "squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
      "name": "wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
      "name": "blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
      "name": "caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon/10/"
    },
    {
      "name": "metapod",
      "url": "https://pokeapi.co/api/v2/pokemon/11/"
    },
    {
      "name": "butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon/12/"
    },
    {
      "name": "weedle",
      "url": "https://pokeapi.co/api/v2/pokemon/13/"
    },
    {
      "name": "kakuna",
      "url": "https://pokeapi.co/api/v2/pokemon/14/"
    },
    {
      "name": "beedrill",
      "url": "https://pokeapi.co/api/v2/pokemon/15/"
    },
    {
      "name": "pidgey",
      "url": "https://pokeapi.co/api/v2/pokemon/16/"
    },
    {
      "name": "pidgeotto",
      "url": "https://pokeapi.co/api/v2/pokemon/17/"
    },
    {
      "name": "pidgeot",
      "url": "https://pokeapi.co/api/v2/pokemon/18/"
    },
    {
      "name": "rattata",
      "url": "https://pokeapi.co/api/v2/pokemon/19/"
    },
    {
      "name": "raticate",
      "url": "https://pokeapi.co/api/v2/pokemon/20/"
    }
  ]
}

[
    {
        "buddy_scale": 19.0,
        "form": "Fall_2019",
        "height_standard_deviation": 0.0875,
        "model_height": 0.7,
        "model_scale": 0.89,
        "pokedex_height": 0.7,
        "pokedex_weight": 6.9,
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur",
        "weight_standard_deviation": 0.8625
    },
    {
        "buddy_scale": 19.0,
        "form": "Normal",
        "height_standard_deviation": 0.0875,
        "model_height": 0.7,
        "model_scale": 0.89,
        "pokedex_height": 0.7,
        "pokedex_weight": 6.9,
        "pokemon_id": 1,
        "pokemon_name": "Bulbasaur",
        "weight_standard_deviation": 0.8625
    }
]
```

## Mockup

The page will display two forms for the user to input any pokemon name or ID at the first form and their weight in the second form which displays a list of pokemon in that weight division +- 5 pounds.

#### Desktop View

![My Desktop View](https://i.imgur.com/dNggVJz.png)

#### Mobile View

![My Mobile View](https://i.imgur.com/y2exlGW.png)

## Schedule of Work

|Day | Goal | What I did accomplish |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | Create Readme, Deploy, Get Approval|
| Sun | Build fetch of data in JS file | Built both fetch of data in JS file|
| Mon | Render data from API on screen | Render data from API on screen|
| Tues | Build form for user to interact with | Build form for user to interact with |
| Wed | wrap up functionaliity | Began styling desktop view|
| Thurs | focus on mobile layout styling | Wrapped up functionality |
| Fri | Desktop layout styling | Mobile styling complete|
| Sat  | Present Project | |