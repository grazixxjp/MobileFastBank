import { View, TextInput, Text } from 'react-native';
import styles from './styles'
import { Feather, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

//Tela de Categorias(ou Menu) urilizando Navigation para transportar entre telas
export default function Categories({ navigation }) {
    return (

        <View style={styles.container}>
            <Text style={styles.seta}>
                Categorias
            </Text>

            <TextInput
                style={styles.input}
                placeholder="    procurar..."
            />

           <View style={styles.opcoes}>
               
                <View style={styles.financeiro}>
                    <TouchableOpacity onPress={() => navigation.navigate('Loan')}>
                        <View style={styles.campo1}>
                            <MaterialCommunityIcons name="finance" size={42} color="#3A0CA3" />
                            <Text>Empréstimo</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                        <AntDesign name="creditcard" size={42} color="#3A0CA3" />
                        <Text>Cartão</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                        <TouchableOpacity onPress={() => navigation.navigate('Pix')}>
                            <Feather name="repeat" size={42} color="#3A0CA3" />
                                <Text>Pix</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <TouchableOpacity onPress={() => navigation.navigate('Qrcode')}> 
                        <Ionicons name="scan" size={42} color="#3A0CA3" />
                        <Text>Qrcode</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View> 
        </View>
    )
}

