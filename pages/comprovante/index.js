import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles'

export default function Comprovante({navigation}) {
    return (

      //Tela de Comprovante do Pix
        <View style={styles.container}>
            <Text style={styles.titulo}>Comprovante de Transferencia</Text>
                <Text  style={styles.data}>Feito em 26/04 as 14:30h</Text>

            <Text style={styles.p}>Valor</Text> 
            <Text style={styles.valor}>R$ 23,32</Text> 

            <Text style={styles.p}>De</Text> 
            <Text>Grazielly Santos</Text>

            <Text  style={styles.p}>Para</Text> 
            <Text>Mary Vieira</Text> 

            <Text  style={styles.p}>Agencia</Text>  
            <Text>56846</Text>     
            <Text  style={styles.p}>Conta</Text> 
            <Text>001</Text>     
            <Text  style={styles.p}>Instituição</Text> 
            <Text>NU PAGAMENTOS - IP</Text> 

            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Final')}>
              <Text style={styles.txtButton}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
  )
}