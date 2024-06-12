import { View,Text, TextInput, Button } from "react-native"
import {UpdateAndDeleteScreenStyles as styles, TableStyles} from '../styles/index'
import { useState } from "react"
import RNPickerSelect from 'react-native-picker-select';
import { useSelector } from "react-redux";
import axios from "axios";

function UpdateOneScreen(){
    const [inputText, setInputText] = useState<any>('')
    const [selectedValue, setSelectedValue] = useState(null)
    const [data, setData] = useState<any>([])
    const [error, setError] = useState<any>({})

    const getId = useSelector((state:any) => state.id)


    const placeholder = {
        label: 'Güncelleyeciğiniz alanı seçiniz',
        value: null,
    }

    const options = [
        { label: 'Ürün Adı', value: 'productName' },
        { label: 'Adet', value: 'piece' },
        { label: 'Birim Fiyatı', value: 'unitPrice' },
        { label: 'Toplam', value: 'total' },
    ]

    async function ProductUpdateOne(){
        await axios.patch(`URL/${getId}`, {
            key: selectedValue,
            value: inputText
        }).then((res)=>{
            setData(res.data)
        }).catch((err)=>setError(err))
    }

    
    return (
        <View style={styles.container}>
            <Text> {data ?? "İşlem başarılı"} </Text>
            <Text style={TableStyles.headerText}>Choose ID: {getId} </Text>
            <View style={styles.box}>
                <RNPickerSelect
                    placeholder={placeholder}
                    items={options}
                    onValueChange={(value) => setSelectedValue(value)}
                    value={selectedValue}
                />
                <View style={styles.secondBox}>
                    <Text style={{fontSize: 17, paddingRight: 5}}>Veri: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputText}
                        value={inputText}
                        placeholder='Type'
                    />
                    
                </View>
                <Button
                    title="Güncelle"
                    onPress={ProductUpdateOne}
                />
            </View>
        </View>
    )
}

export default UpdateOneScreen