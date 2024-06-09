import React from 'react'
import { Text, View } from 'react-native'
import { TableTypes } from '../types/index'

const Table :React.FC<TableTypes> = ({data, error}) => {
    return (
        <View>
            {error && <Text> {error.message} </Text>}
            {data?.map((item:any)=> <Text> {item.name} </Text>)}
        </View>
    )
}

export default Table