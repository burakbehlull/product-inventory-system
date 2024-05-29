import React from 'react'
import Table from './components/Table'
import './main.scss'
import useFetch from './hooks/useFetch'
function App() {
  const {data, error, loading} = useFetch('http://localhost:3000/api/products')
  if(!loading){
    return <h3>loading...</h3>
  }
  
  return (
    <>
      <Table data={data}/>
      {error ?? error?.message}
    </>
  )
}

export default App
