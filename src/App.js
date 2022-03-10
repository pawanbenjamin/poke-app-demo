import React from 'react'

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
  return <div></div>
}

export default App
