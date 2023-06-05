import { View, Image, TouchableOpacity, Text, TextInput} from "react-native";
import styles from './styles'
//Tela para informações adicionais para transferencia do Pix.

export default function PixDois({ navigation }) {
    return (
        <View style={styles.container}>
               <Text  style={styles.p}>Novo pagamento</Text>

               <Image style={styles.person}
                        source={require('../../assets/mulher1.jpg')}>
                </Image>

            <View>
                <View>
                <Text style={styles.h1} >Mary Viera</Text>
                <Text style={styles.h1}>***.895.258-**</Text>
                <Text style={styles.h1}>NU PAGAMENTOS - IP</Text>
                <Text style={styles.h1}>001 / 56846</Text>
                </View>
            </View>
            
            <View>
                <Text>Hoje</Text>
          
                <Text styles={styles.agendar}>Agendar</Text>
                <View style={styles.caixa}></View>

                <View style={styles.descricao}>
                <TextInput
                style={styles.descricaoTxt}
                placeholder='Descrição'
              />
            
                </View>
            </View>

                <Text style={styles.h1}>Saldo</Text>
                <Text>7,658.00</Text>

                <View style={styles.btnContainer}>
          
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Comprovante')}>
                        <Text style={styles.txtButton}>Enviar</Text>
                    </TouchableOpacity>
                   
                </View>

    </View>
    )
}