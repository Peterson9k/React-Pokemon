import React from 'react'
import '../css/cssComponents/cardPokemon.css'
const cardPokemon = ({options, nome, img, tipo}) => {



  return (

    <div className='card_Pokemon'>
             <img src={img} alt={nome} className='img_card'/>
            <h1>{nome}</h1>
       
    </div>
  )


        //    <h2>img</h2>
        //    <h1>Nome</h1>
         //   <p>tipo 1 | tipo 2</p> 
        //</div>
  
}

export default cardPokemon