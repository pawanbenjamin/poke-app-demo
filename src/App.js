import React from 'react'
import { useState, useEffect } from 'react'
import { fetchPokemon, fetchSinglePokemon } from './api'
import Zoo from './components/Zoo'
/*
    GOAL:
        1. To fetch pokemon from the PokeAPI, 
        2. Render them all in the Zoo component,
        3. Have buttons which paginate thorugh the pokemon (via next and previous)
        4. View a single Pokemon when You click on the Name

    Roadmap:

      1. Create an AJAX helper function in our API folder's index.js
      2. Use that function in this App.js component and add the pokemon list to our state
      3. Pass the pokemon list into our Zoo.jsx component, and render the list in the browser
      4. Create buttons which select the next or previous group of pokemon
            **HINT**
                Use the urls in the API response's next and previous properties! 
                Think about how we can use the useState() hook to change the url
                we pass to our AJAX helper function, so we can call it again!
      5. Use the url property of our API response and write fetchSinglePokemon AJAX helper
      6. Call the function when clicking on a pokemon's name
 */

function App() {
  /* Because we need access to next and previous, lets just keep a track of the whole response
     instead of just the array of names. We also need to account for needing initial values or 
     our Zoo component will break! */
  const [responseObj, setResponseObj] = useState({
    results: [],
    previous: null,
    next: null,
    count: null,
  })
  const [currentUrl, setCurrentURL] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=10'
  )
  /* We need a new state variable to keep track of the selected Pokemon */
  const [selectedPokemon, setSelectedPokemon] = useState({})
  const [selectedPokemonURL, setSelectedPokemonURL] = useState(null)

  useEffect(() => {
    async function getPokemon() {
      // changed these variables to reflect our API data
      const pokemonResponse = await fetchPokemon(currentUrl)
      console.log({
        pokemonResponse,
      })
      setResponseObj(pokemonResponse)
    }
    getPokemon()
  }, [currentUrl])

  /** We're going to use another useEffect() to just handle the seletedPokemon */
  useEffect(() => {
    async function getSinglePokemon() {
      if (selectedPokemonURL) {
        const singlePokemonData = await fetchSinglePokemon(selectedPokemonURL)
        setSelectedPokemon(singlePokemonData)
      }
    }
    getSinglePokemon()
  }, [selectedPokemonURL])

  console.log(selectedPokemon)

  return (
    <div>
      <Zoo
        responseObj={responseObj}
        setCurrentURL={setCurrentURL}
        setSelectedPokemonURL={setSelectedPokemonURL}
      />
    </div>
  )
}

export default App
