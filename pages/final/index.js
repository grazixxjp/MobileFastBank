import { View, TouchableOpacity, Text} from 'react-native';
import styles from './styles'

export default function Final({navigation}){
    return (
       //Tela 'final' para movimentações, pix, cartões e etc...
        <View style={styles.container}>
            
            <View style={styles.texto}>
            <Text style={styles.texto}>Feito!</Text>
            <Text style={styles.texto}>Mais informações no seu Email!</Text>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.txtButton}>Fechar</Text>
                </TouchableOpacity>
            </View>
       
        </View>
    )
}