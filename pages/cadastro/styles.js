import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        flex: 0.2,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 40,
    },
    container2: {
        flex: 1,
        padding: 3,
        width: '100%',
        alignItems: 'center',

    },
    texto1: {
        fontSize: 50,
        color: '#2E8B57',
        fontWeight: 'bold',
    },
    texto2: {
        fontSize: 30,
    },
    top: {
        flexDirection: 'column',
        backgroundColor: '#f00',
    },
    campo: {
        width: '70%',
        paddingBottom: 30,
        paddingTop: 10,
    },
    caixa1: {
        borderColor: '#3A0CA3',
        borderWidth: 1,
        borderRadius: 8,
        color: '#555',
        height: 40,
        width: '100%',
        padding: 10,

    },
    foto0: {
        padding: 10,
        alignItems: 'center',
    },
    foto1: {
        width: 150,
        height: 150,
        backgroundColor: '#EEE9E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    entrada: {
        paddingBottom: 10,
        paddingTop: 2,
        alignItems: 'center',
    },
    botao: {
        width: '30%',
        height: 50,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btn: {
        marginTop: 30,
        width: 149,
        height: 33,
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#3A0CA3',
        justifyContent: 'center',
        alignItems: 'center', 
        shadowColor: '#000',
    },
    btnContainer: {
        marginTop: 30,
        pading: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height:150,
        width: '100%',

    },
    sucesso: {
        fontSize: 10,
        color: '#0f0',
    },
    txtButton: {
        fontSize: 15,
        color: '#fff',
    },
    logo:{
        paddingTop: 50,
        width: 50,
        height: 25,
    },
    botao:{
        backgroundColor: '#8D8D8D',
        justifyContent: 'center',
        alignItems: 'center', 
        shadowColor: '#000',
        width: 149,
        height: 33,
        borderRadius: 15,
        padding: 10,
    }
})

export default styles