import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        padding: 20,
    },
    btn: {
        width: 149,
        height: 33,
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#3A0CA3',
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
        color: '#fff',
    },
    valor:{
        color: '#3A0CA3',
        marginBottom: 20,
        fontWeight: 'bold'
    },
    p:{
        fontWeight: 'bold',
        marginTop: 20
    },
    titulo:{
        fontSize: 20,
 
    },
    data:{
        marginBottom: 20
    }
})

export default styles