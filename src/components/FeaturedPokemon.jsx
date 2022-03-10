import React from 'react'

const FeaturedPokemon = ({ selectedPokemon }) => {
  return (
    <div>
      <img src={selectedPokemon.sprites.front_default} />
      <h5>Name: {selectedPokemon.name}</h5>
      <h5>Height: {selectedPokemon.height}</h5>
      <h5>Weight: {selectedPokemon.weight}</h5>
    </div>
  )
}

export default FeaturedPokemon
