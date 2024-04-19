import React from "react";
import CardPokemon from "./assets/Components/cardPokemon";
import Pesquisa from "./assets/Components/Pesquisa";


function App() {

  const [options, setOptions] = React.useState([])
  const [busca, setBusca] = React.useState('')


  const apiData = async () => {
    const endpoints = [];
    try{
        for (var i = 1; i <= 50; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

      await Promise.all(endpoints.map((endpoint) => fetch(endpoint)))
          .then(res => Promise.all(res.map(r => r.json())))
          .then((res) => {
            setOptions(res)
      })
    }
    catch (error){
          console.log(error)
    }  
  }

  React.useEffect(() => {
    apiData()
  }, [])



  const arrayNames = options.map(n => n.name)
  const arrayFotos = options.map(f => f.sprites.front_default)
  const lowerPesquisa = busca.toLocaleLowerCase()

  const namesFiltradosGeral = arrayNames.filter((name) => name.toLocaleLowerCase().includes(lowerPesquisa))
  const namesFiltradosInicial = arrayNames.filter((name) => busca.length>0 && name.startsWith(lowerPesquisa))

  const elemento = namesFiltradosInicial
  const idx = namesFiltradosInicial.map(element => arrayNames.indexOf(element))


  idx.map(i => console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`))



  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png
 

  return (
    <> 

      <Pesquisa setValue={setBusca} value={busca}/>
      {namesFiltradosInicial.map(item => <li>{item}</li>)}
      <div className="card">
        {options.map(({sprites, name, types}) => (
          <CardPokemon img={sprites.front_default} nome={name[0].toLocaleUpperCase() + name.substring(1)} tipo={types.map(ty => ty.type.name)} />

      ))}

       </div>
    </>
  )
}

export default App;


// usar Split
// usar join
// usar incluides 

