import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({ 
   container:{
      flex: 1,
      backgroundColor: '#fff',
      padding: 20
   },
   person:{
      width: 60,
      height: 60,
      borderRadius: 50,
      justifyContent: 'center',
   },
   h1:{
      marginTop: 20,
      fontSize: 15,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   },
   descricao:{
      width: 300,
      height: 80,
      borderRadius: 15,
      justifyContent: 'center',
      backgroundColor: '#D9D9D9',
      
   },
   descricaoTxt:{
      opacity: 0.5,
      marginLeft: 20,
      
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
   btn: {
   width: 149,
   height: 33,
   borderRadius: 15,
   padding: 10,
   backgroundColor: '#3A0CA3',
   justifyContent: 'center',
   alignItems: 'center', 
   shadowColor: '#000',
   
},
caixa:{
   width: 20,
   height: 20,
   padding: 10,
   backgroundColor: '#D9D9D9',
   marginBottom: 50
},
p:{
   marginBottom: 20,
   marginTop: 20,
   fontSize: 15,
   fontWeight: 'bold',
}
    
})

export default styles