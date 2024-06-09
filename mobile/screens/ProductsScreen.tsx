import { Text, View,Button } from 'react-native'
import { useEffect, useState } from 'react'

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { Table } from '../components/index'
import { TableStyles } from '../styles/index'

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

    const dispatch = useDispatch()
    const getId = useSelector((state:any) => state.id)

    return (
        <View style={{padding: 10}}>
            <Text style={TableStyles.headerText}>Choose ID: {getId} </Text>
            <Table data={products} error={error} />
        </View>
    )
}

export default ProductScreen