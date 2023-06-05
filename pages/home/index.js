import { View, Text,Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import cartao from '../../assets/cartao.png'

//Tela Home do cartão, com pagamentos, e funções de pedir outro e bloquear

export default function Home({navigation}){
    return (
       
        <View style={styles.container}>
            <View style={styles.seta}>
             </View>
            <Text style={styles.titulo}>Olá, User</Text>
      
        <View style={styles.imagem}>
            <Image style={styles.imagem} source={(cartao)}/>
        </View>
       
        <View style={styles.opcoes}>
                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <AntDesign name="scan1" size={24} color="black" />
                    </View>
                </View>
        
             
                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <AntDesign name="arrowdown" size={24} color="black" />
                    </View>
                </View>

                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <AntDesign name="arrowup" size={24} color="black" />
                    </View>
                </View>

                <View style={styles.financeiro}>
                    <View style={styles.campo1}>
                    <Feather name="menu" size={24} color="black" />
                    </View>
                </View>
            </View>

                <View>
                    <Text style={styles.BankCard}>Opções:</Text>
                 </View>

                 <View>

                {/* Botões de Bloquear e pedir outro cartão (sem lógica) */}
                 <View style={styles.btnContainer}>
                        <View style={styles.figura}>
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Final')}>
                                <Text style={styles.txtButton}>Bloquear</Text>
                            </TouchableOpacity>
                            </View>
                                <View style={styles.figura1}>
                                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Final')}>
                                    <Text style={styles.txtButton}>Pedir Outro</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                 </View>

                 <View style={styles.Activity}>
                    <Text style={styles.Texto}>Últimas Atividades</Text>
                 </View>

                 <View style={styles.atividade}>
                    <View style={styles.compras}>
                    <Feather name="shopping-bag" size={24} color="#000" />
                        <Text>Shopping</Text>
                            <Text style={styles.text2}>Maio 29, 14:21</Text>
                    </View>
                    <View style={styles.compras}>
                    <Feather name="shopping-bag" size={24} color="#000" />
                        <Text>Freelance Design</Text>
                            <Text style={styles.text2}>Maio 29, 2:25</Text>
                    </View>
                    <View style={styles.compras}>
                    <Feather  name="shopping-bag" size={24} color="#000" />
                        <Text s>Movie</Text>
                            <Text style={styles.text2}> Maio 29, 12:00</Text>
                    </View>
                </View>
          
            </View>
    )
}