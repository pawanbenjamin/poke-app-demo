import React from 'react'

const Zoo = ({ pokemonList }) => {
  return (
    <div>
      {pokemonList.map((pokemon) => {
        return (
          <div>
            <h4>{pokemon.name}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Zoo
