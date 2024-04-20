import React from 'react'



export const ApiFetchPokemon = () => {
    const [pokemonList, setPokemonList] = React.useState([])
    const [filteredPokemons, setFilteredPokemons] = React.useState([])
    const [filteredNamesPokemon, setFilteredNamesPokemon] = React.useState([])
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
                    setPokemonList(res);
                    setFilteredPokemons(res)
                })
            }
        catch (error){console.log(error)}  
    }


    React.useEffect(() => {
        let newList = [...pokemonList]
        
        if(busca) {
            newList = pokemonList.filter(item => item.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase()));
        }
        setFilteredPokemons(newList);
        setFilteredNamesPokemon(newList)
        }, [busca, pokemonList])

    React.useEffect(() => {
        apiData()
    }, [])


    

  return {
    pokemonList, 
    filteredPokemons, 
    busca, 
    setBusca,
    filteredNamesPokemon
}
}
