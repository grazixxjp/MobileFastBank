import { StyleSheet, Dimensions } from "react-native";

const { } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFA',
        display: 'flex',
        padding: 20

 
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
    opcoes:{
        display: 'flex',
        width: 300, 
        padding: 10,
        alignContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        margin: 20,

    },
    financeiro:{
        backgroundColor: '#D9D9D9',
        borderRadius: 35,
        width: 40, 
        height: 40,
        display: 'flex',
        justifyContent: 'space-around',

    },
    campo1:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
 
    
    },
    imagem:{
        width: 200,
        height: 135,
        borderRadius: 20,
        marginLeft: 50,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',

    },
    titulo:{
        paddingTop: 30
    },
    BankCard:{
        paddingBottom: 20,
        fontWeight: 'semibold',
    },
    btn: {
        width: 149,
        height: 33,
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#8D8D8D',
        justifyContent: 'center',
        alignItems: 'center', 
        shadowColor: '#000',

        
    },
    btnContainer: {
        pading: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height:70,
        width: '100%',


    },
    txtButton: {
        fontSize: 15,
        color: '#fff',
    
    },
    figura:{
        backgroundColor: '#8D8D8D',
        width: 149,
        height: 33,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
         
    },
    figura1:{
        paddingTop: 20,
    },
    Activity:{
        paddingTop: 30,
        fontWeight: "bold"
    },
    Texto:{
        fontWeight: "bold",
        paddingBottom: 20,
    },
    text2:{
        opacity: 0.5,
        marginBottom: 20,
    },
  
})

export default styles