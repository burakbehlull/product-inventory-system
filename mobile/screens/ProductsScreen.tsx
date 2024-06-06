import { Text } from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table } from '../components/index'


function ProductScreen(){

    return (
        <>
            <Text>Product SCREEN</Text>
            <Table data={null} />
        </>
    )
}

export default ProductScreen