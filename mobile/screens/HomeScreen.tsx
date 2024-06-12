import { View,Text } from "react-native"

function HomeScreen(){

    return (
        <View style={{padding: 30}}>
            <Text style={{fontSize: 25}}>Welcome to the product inventory system.</Text>
            <Text style={{fontSize: 17, paddingTop: 17}}>For transactions, just press the buttons below.</Text>
        </View>
    )
}

export default HomeScreen