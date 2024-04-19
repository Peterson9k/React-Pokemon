import React from 'react'

const Pesquisa = ({setValue, value}) => {

  
  return <div className='divBusca'>
      <input type="text" onChange={({target}) => setValue(target.value)} value={value} />
  </div>
}

export default Pesquisa