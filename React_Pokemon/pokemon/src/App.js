import React from "react";
import fetchData from "./assets/Fetch/FetchData_Pokemon";
import CardPokemon from "./assets/Components/cardPokemon";
import './assets/css/cssComponents/card.css'



function App() {

  const {data, error, loading} = fetchData()
  const [options, setOptions] = React.useState()


  const apiData = async () => {
    const endpoints = [];
    try{
        for (var i = 1; i <= 50; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

      await Promise.all(endpoints.map((endpoint) => fetch(endpoint)))
          .then(res => Promise.all(res.map(r => r.json())))
          .then((res) => {
          setOptions(res&&res)
      })
    }
    catch (error){
          console.log(error)
    }  
  }
  React.useEffect(() => {
    apiData()
  }, [])

  return (
    <> 
      <div className="card">
      {options&&options.map((option) => (
          <CardPokemon img={option.sprites.back_default} nome={option.name} options={option}/>

      ))}

       </div>
    </>
  )
}

export default App;

//{ options&&options.map((option) => (
   //     <div>
  //          <p>{option.name}</p>
  //          <img src={option.sprites.back_default} alt="" />
//
   //     </div>
    //    ))
  //    }