import { Text, Button, View, TextInput } from 'react-native'
import { useSelector } from 'react-redux'
import { TableStyles,UpdateAndDeleteScreenStyles } from '../styles/index'
import { useState } from 'react'
import axios from 'axios'

function UpdateAndDeleteScreen(){
    const [data, setData] = useState<any>([])
    const [error, setError] = useState<any>({})


    const [nameInput, setNameInput] = useState<any>({})
    const [pieceInput, setPieceInput] = useState<any>({})
    const [unitPriceInput, setUnitPriceInput] = useState<any>({})
    const [totalInput, setTotalInput] = useState<any>({})



    const getId = useSelector((state:any) => state.id)
    
    async function DeleteProduct(){
        if(getId){
            const response = await axios.delete(`URL/${getId}`).then((res)=>{
                setData(res.data)
            }).catch((err)=>setError(err))
            return response
        }
    }

    async function UpdateProduct(){
        
        const formObject = {
            productName: nameInput,
            piece: parseInt(pieceInput, 10),
            unitPrice: parseInt(unitPriceInput, 10),
            total: parseInt(totalInput, 10)
        }

        if(formObject){
            const response = await axios.put(`URL/${getId}`, formObject).then((res)=>{
                setData(res.data)
            }).catch((err)=>setError(err))
            return response
        }
    }
    
    
    return (
        <View style={UpdateAndDeleteScreenStyles.container}>
            <Text style={TableStyles.headerText}>Choose ID: {getId} </Text>
            <View style={TableStyles.space}></View>
            <Button 
                title="Sil"
                onPress={DeleteProduct}
            />
            <View style={TableStyles.space}></View>
            <Text style={UpdateAndDeleteScreenStyles.text}>UPDATE SCREEN</Text>

            <View style={UpdateAndDeleteScreenStyles.box}>
                <TextInput
                    style={UpdateAndDeleteScreenStyles.input}
                    onChangeText={setNameInput}
                    value={nameInput}
                    placeholder='Product Name'
                    keyboardType='default'
                />

                <TextInput
                    style={UpdateAndDeleteScreenStyles.input}
                    onChangeText={setPieceInput}
                    value={pieceInput}
                    placeholder='Piece'
                    keyboardType='numeric'
                />        
                    
                <TextInput
                    style={UpdateAndDeleteScreenStyles.input}
                    onChangeText={setUnitPriceInput}
                    value={unitPriceInput}
                    placeholder='Unit Price'
                    keyboardType='numeric'
                    />                
                <TextInput
                    style={UpdateAndDeleteScreenStyles.input}
                    onChangeText={setTotalInput}
                    value={totalInput}
                    placeholder='Total'
                    keyboardType='numeric'
                />
                <Button 
                    title='Güncelle'
                    onPress={UpdateProduct}
                />
            </View>
        </View>
    )
}

export default UpdateAndDeleteScreen