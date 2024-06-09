import React from 'react'
import { Button, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import { TableType } from '../types/index'
import { TableStyles } from '../styles/index'
import { useDispatch } from 'react-redux'

const Table :React.FC<TableType> = ({data, error}) => {
    const dispatch = useDispatch()
    function setId(id:any){
        dispatch({
            type: 'SET_ID',
            payload: id
        })
    }
    return (
        <ScrollView style={TableStyles.container}>
            {error && <Text> {error.message} </Text>}
            <View>
                {data?.map((item:any)=> 
                <View key={item.id} style={TableStyles.card} > 
                    <Text>Name: {item.name}</Text>
                    <Text>Username: {item.username}</Text>
                    <Text>Email: {item.email}</Text>
                    <Text>Website: {item.phone}</Text>
                    <View style={TableStyles.space}></View>
                    <Button 
                        title='seç'
                        onPress={()=> setId(item.id)}
                    />
                </View>)}
            </View>
        </ScrollView>
    )
}

export default Table