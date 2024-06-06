import React from 'react'
import { Text, View} from 'react-native'
import { TableTypes } from '../types/index'

const Table :React.FC<TableTypes> = ({data}) => {
    return (
        <>
            {data.map((item:any)=> <Text> {item.name} </Text>)}
        </>
    )
}

export default Table