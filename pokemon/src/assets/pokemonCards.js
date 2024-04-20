import React from 'react'
import './css/cssComponents/cardPokemon.css'
import {CardPokemon} from './Components/cardPokemon'
import { ApiFetchPokemon } from './Fetch/apiFetchPokemon'
import {Pesquisa} from './Components/Pesquisa'



const PokemonCards = () => {
  const {busca, setBusca, filteredPokemons,pokemonList,filteredNamesPokemon} = ApiFetchPokemon()
  const [button, setButton] = React.useState(null)
  function PokemonCards(){
    return (
          <div className='card'>
              {
                pokemonList.map( ({name, sprites, types, id}) => (
                  <CardPokemon 
                      key={id}
                      nome={name[0].toLocaleUpperCase() + name.substring(1)}
                      img={sprites.front_default}    
                      tipo={types.map(ty => ty.type.name)}
                      
                  />))
              }
      </div>
    )
  }

  function FiltroPokemonCards (){
    return (
    <div className='card'>
        {
          filteredPokemons.map( (item , index) => (
            <CardPokemon
              key={index}
              nome={item.name[0].toLocaleUpperCase() + item.name.substring(1)}
              img={item.sprites.front_default}    
              tipo={item.types.map(ty => ty.type.name)}
            />
          ))
        }
    </div>
  )
}

  const namesPokemon = filteredNamesPokemon.map(n => n.name[0].toLocaleUpperCase() + n.name.substring(1))

  function handleClickLista({target}){
      setBusca(target.innerText)
      setButton(null)
  }

  function handleClickButton(){
    console.log(button)
    setButton(button === null?true: null)
  }
 
 
  console.log(button)
  return (
    <>
    
      <Pesquisa setValue={setBusca} value={busca}/>  

      <ul>
        {busca && 
          namesPokemon.map(
              (n, index) => index < 5 ? <li onClick={handleClickLista}>{n}</li> : null
          )
        }
      
      </ul>
      
      <button onClick={handleClickButton}>Buscar</button>

      
      {
        button?<FiltroPokemonCards/>:<PokemonCards/>
      }


    </>
  )
}

export default PokemonCards