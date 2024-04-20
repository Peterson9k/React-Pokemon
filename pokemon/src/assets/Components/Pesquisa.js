import React from 'react'
import Img from '../img/pokemon-logo.webp'
import '../css/cssComponents/pesquisa.css'
export const Pesquisa = ({setValue, value}) => {
  
  return <div className='divBusca'>
      <img src={Img} alt="logoPokemon" className='logo'/>
        <input type="text" onChange={({target}) => setValue(target.value)} value={value} placeholder='Buscar...'/>
      
  </div>
}
