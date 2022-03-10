const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

/* 
    Write a AJAX helper function which takes a url, and returns a list of pokemon 
        TIPS: use the url above in the browser to see what we're getting from the API
*/

export const fetchPokemon = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  /* changed to just return data, so we can have access to 
    the previous and next properties for our buttons */
  return data
}

export const fetchSinglePokemon = async (url) => {
  const response = await fetch(url)
  // console.log this data variable! There is so much info here!
  const data = await response.json()
  console.log(data)
  const { name, species, sprites, height, weight } = data
  return { name, species, sprites, height, weight }
}
