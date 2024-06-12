import { StyleSheet } from 'react-native'

export const UpdateAndDeleteScreenStyles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 5
    },
    box: {
        paddingTop: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 11,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 15,
        margin: 2
    },
    secondBox: {
        display: 'flex', 
        width: '80%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
}) 