import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20
 
    },
    objetivo:{
        width: 300,
        height: 60,
        backgroundColor:'#D9D9D9',
        borderRadius: 15,
        marginBottom: 20,
    },
    cep:{
        width: 250,
        height: 35,
        backgroundColor:'#D9D9D9',
        borderRadius: 15,
        marginBottom: 20,

    },
    renda:{
        borderColor: '#3A0CA3',
        borderWidth: 1,
        borderRadius: 8,
        color: '#555',
        height: 40,
        width: '70%',
        padding: 10,
        marginBottom: 20,
    },
    preco:{
        borderColor: '#3A0CA3',
        borderWidth: 1,
        borderRadius: 8,
        color: '#555',
        height: 40,
        width: '70%',
        padding: 10,
        marginBottom: 20,

    },
    botao:{
        marginTop: 20,
        width: 149,
        height: 33,
        borderRadius: 15,
        backgroundColor: '#3A0CA3',
        justifyContent: 'center',
        alignItems: 'center', 
        shadowColor: '#000',
        position: 'relative',
      
    },
    txtButton:{
        fontWeight: 'bold',
        color: '#fff'
    },
    titulo: {
        fontSize: 20,
        marginBottom: 20,

    },
    seta:{
        paddingTop: 30,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems:"center",
        paddingBottom: 30,
        fontSize: 15
    }

 
})


export default styles