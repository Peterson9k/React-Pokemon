import React from "react";
import { UseFetch } from "./UseFetch_Pokemon";
function App() {
  const {data, error, loading, request} = UseFetch()

    React.useEffect(() => {
      async function fetchData(){
        await request('https://pokeapi.co/api/v2/pokemon/')  
      }
      fetchData()
    }, [request])

   
      return {data, error,loading}
    
   
}

export default App;
