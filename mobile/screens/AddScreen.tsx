import { useState } from 'react'
import { Text,View, TextInput, Button } from 'react-native'
import {UpdateAndDeleteScreenStyles as styles,TableStyles} from '../styles/index'
import axios from 'axios'
function AddScreen(){
    const [productName, setProductName] = useState('') 
    const [piece, setPiece] = useState('') 
    const [unitPrice, setUnitPrice] = useState('') 
    const [total, setTotal] = useState('') 

    const [data, setData] = useState([]) 
    const [error, setError] = useState({}) 


    async function ProductAdd(){
        if(productName && piece && unitPrice && total){
            await axios.post(`URL`).then((res)=>{
                setData(res.data)
            }).catch((err)=>setError(err))
        }
    }
    return (
        <View style={styles.container}>
            <Text> {data ?? "İşlem başarılı"} </Text>
            <View style={styles.box}>
                <TextInput
                    style={styles.input}
                    onChangeText={setProductName}
                    value={productName}
                    placeholder='Product Name'
                    keyboardType='default'
                />        
                <TextInput
                    style={styles.input}
                    onChangeText={setPiece}
                    value={piece}
                    placeholder='Piece'
                    keyboardType='default'
                />        
                <TextInput
                    style={styles.input}
                    onChangeText={setUnitPrice}
                    value={unitPrice}
                    placeholder='Unit Price'
                    keyboardType='default'
                />        
                <TextInput
                    style={styles.input}
                    onChangeText={setTotal}
                    value={total}
                    placeholder='Total'
                    keyboardType='default'
                />
            </View>
            <View style={TableStyles.space}></View>
            <Button
                title="Ekle"
                onPress={ProductAdd}
            />
        </View>
    )
}

export default AddScreen