import React from 'react'
import Table from './components/Table'
import './main.scss'
import useFetch from './hooks/useFetch'
import {BACKEND_URI} from '../../config.json'
import ProductAdd from './components/ProductAdd'

function App() {
  const {data, error, loading} = useFetch(BACKEND_URI+'/api/products')
  if(!loading){
    return <h3>loading...</h3>
  }
  
  return (
    <>
      <Table data={data}/>
      {error ?? error?.message}

      <ProductAdd />

    </>
  )
}

export default App
