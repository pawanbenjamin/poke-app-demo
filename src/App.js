import React from 'react'
import { useState, useEffect } from 'react'
import { fetchPokemon } from './api'
/*
    GOAL:
        1. To fetch pokemon from the PokeAPI, 
        2. Render them all in the Zoo component,
        3. Have buttons which paginate thorugh the pokemon (via next and previous)

    Roadmap:

      1. Create an AJAX helper function in our API folder's index.js
      2. Use the function in this App.js component and add the pokemon list to our state
      3. Pass the pokemon list into our Zoo.jsx component, and render them in the browser
      4. Create buttons which select the next or previous group of pokemon
            **HINT**
                Use the urls in the API response's next and previous properties! 
                Think about how we can use the useState() hook to change the url
                we pass to our AJAX helper function, so we can call it again!
 */

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    async function getPokemon() {
      const pokemon = await fetchPokemon(
        'https://pokeapi.co/api/v2/pokemon?limit=10'
      )
      setPokemonList(pokemon)
    }
    getPokemon()
  }, [])

  console.log(pokemonList)

  return <div></div>
}

export default App
