import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
        justifyContent: 'center',
 
    },
    container1:{
        alignItems: 'left',
        justifyContent: 'left',
        display: 'flex',
        width: '100%',
        padding: 35,
    },
    textoCabecalho: {
        padding: 32,
        fontSize: 15,
        color: 'black',
        alignItems: 'left',
        justifyContent: 'left',
        display: 'flex',
    },
    campo: {
        width: '70%',
        paddingBottom: 10,
        paddingTop: 10,

    },
    caixa1: {
        borderRadius: 15,
        width: '100%',
        padding: 10,
        backgroundColor: '#D9D9D9',
        opacity: 0.70,

    },
    opcoes:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        width: 245, 
        alignItem: 'space-between',
        flexWrap: 'wrap',
        alignContent: 'space-around',
    },
    financeiro:{
        backgroundColor: '#D9D9D9',
        width: 111,
        height: 88,
        borderRadius: 15,
    },

    campo1:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    input:{
        backgroundColor: '#D9D9D9',
        width: 240,
        height: 50,
        borderRadius: 20,
    },
    titulo:{
   
        width: 20, 
        height: 15,

 
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
    },
 

});


export default styles

