import React from 'react'

export const UseFetch = () => {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    const request = React.useCallback(
      async (url) => {
        let response;
        let json;

        try{
            setError(null)
            setLoading(true)
            response = await fetch(url)
            json = await response.json()
        } 
        catch(erro) {
            setError(erro)
            json = null
        } 
        finally {
            setData(json)
            setLoading(false)
            return {response, data}
        }
      }, [])

      return {data, error, loading, request}

}
