import { Text } from 'react-native'
import { useEffect, useState } from 'react'

import axios from 'axios'

import { Table } from '../components/index'


function ProductScreen(){
    const [products, setProducts] = useState<any[] | any | null>([])
    const [error, setError] = useState<object|any>({})
    useEffect(()=>{
        async function fetchData(){
            await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>setProducts(res.data))
            .catch(err=> setError(err))        
        }
        fetchData()
    }, [])
    return (
        <>
            <Text>Product SCREEN</Text>
            <Table data={products} error={error} />
        </>
    )
}

export default ProductScreen