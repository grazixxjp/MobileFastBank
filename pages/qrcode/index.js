import { View,TouchableOpacity, Text } from "react-native";
import styles from './styles'
//Tela de Qrcode que não funciona

export default function Qrcode({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Qrcode</Text>
           
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Final')}>
                <Text style={styles.txtButton}>Enviar</Text>
            </TouchableOpacity>
      
      
        </View>
    )
}