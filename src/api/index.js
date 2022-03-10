const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

/* 
    Write a AJAX helper function which takes a url, and returns a list of pokemon 
        TIPS: use the url above in the browser to see what we're getting from the API
*/

export const fetchPokemon = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  const pokemon = data.results
  return pokemon
}
