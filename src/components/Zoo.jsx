import React from 'react'

// Remember we changed out data
const Zoo = ({ responseObj, setCurrentURL, setSelectedPokemonURL }) => {
  // Now we can take the array of names off the object
  const pokemonList = responseObj.results
  return (
    <div>
      {pokemonList.map((pokemon, i) => {
        return (
          /* When we click on a name, we're resetting our selectedPokemonURL, which triggers
            our second useEffect() to fire again */
          <div key={i} onClick={() => setSelectedPokemonURL(pokemon.url)}>
            <h4>{pokemon.name}</h4>
          </div>
        )
      })}
      <button
        disabled={!responseObj.previous}
        onClick={() => setCurrentURL(responseObj.previous)}
      >
        Previous
      </button>
      <button
        disabled={!responseObj.next}
        onClick={() => setCurrentURL(responseObj.next)}
      >
        Next
      </button>
    </div>
  )
}

export default Zoo
