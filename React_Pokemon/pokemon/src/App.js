import React from "react";
import CardPokemon from "./assets/Components/cardPokemon";
import Pesquisa from "./assets/Components/Pesquisa";


function App() {

  const [options, setOptions] = React.useState([])
  const [input, setInput] = React.useState('')


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

  const teste = options.map((item) => item.name)
  console.log(teste)
  return (
    <> 

      <Pesquisa setValue={setInput} value={input}/>
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