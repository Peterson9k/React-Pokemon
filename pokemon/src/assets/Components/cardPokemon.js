import React from 'react'
import '../css/cssComponents/cardPokemon.css'
const cardPokemon = ({ nome, img, tipo}) => {



  return <div>
            <img src={img} alt={nome} />
            <h3>{nome}</h3>
            {tipo.map(ty => <p>{ty}</p>)}
          </div>
}

export default cardPokemon