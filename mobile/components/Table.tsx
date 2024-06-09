import React from 'react'
import { Text, View } from 'react-native'
import { TableType } from '../types/index'

const Table :React.FC<TableType> = ({data, error}) => {
    return (
        <View style={{paddingTop: 2}}>
            {error && <Text> {error.message} </Text>}
            {data?.map((item:any)=> <Text key={item.id}> {item.name} </Text>)}
        </View>
    )
}

export default Table