import React from 'react'
export const CardPokemon = ({ nome, img, tipo}) => {
  return <div>
            <img src={img} alt={nome} />
            <h3>{nome}</h3>
            <ul>
              {tipo.map((ty,index)=> <li key={index}>{ty}</li>)}
            </ul>
            
          </div>
}
