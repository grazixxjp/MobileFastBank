import { StyleSheet, Dimensions } from "react-native";

const { } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3A0CA3',
        display: 'flex',
        padding: 20,
        color: '#000',
        fontFamily: 'sans-serif',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    btn: {
        width: 150,
        height: 33,
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center', 
        shadowColor: '#000',
        position: 'relative'
    },
    btnContainer: {
        pading: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height:150,
        width: '100%',
    },
    txtButton: {
        fontSize: 15,
        color: '#000',
    },
    texto:{
        justifyContent: 'center',
        alignItems: 'center', 
        color: '#fff',
        fontSize: 20,

    }
})

export default styles