import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({ 
   container:{
      flex: 1,
      backgroundColor: '#fff',
      padding: 20
   },
   saldo:{
      fontSize: 22,
   },
   fav:{
      marginTop: 20,
      color: '#3A0CA3' ,
   },
  transicao:{
   marginBottom: 20,
   opacity: 0.5
  },
  photos:{
      padding: 10,
      alignContent: 'space-around',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      display: 'flex',
      margin: 20,

  },
  person:{
      display: 'flex',
      flexDirection: 'row',
      width: 70, 
      height: 70,
      borderRadius: 15,
      margin: 20
  },
  p:{
      fontWeight: 'bold',
      marginTop: 20
  }
})

export default styles