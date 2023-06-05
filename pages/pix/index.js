import { View, Image, Text} from "react-native";
import styles from './styles'
import { Link } from '@react-navigation/native';

//Tela de Pix, com saldo, contatos recentes e favoritos e as transições feitas.
//Fiz a parte de transferencias, mas não deu tempo de colocar em prática 
export default function Pix({ navigation }) {

    useEffect(() => {
        const {token} = route.params
        setParamsToken(token)
        buscarDados(token)
    }, [])

    const buscarDadosConta = (id, token) => {
        axios.get('http://127.0.0.1:8000/banco/contas/' + id, {headers:{Authorization: "JWT " + token}
        }).then((response) =>{
            setContaRemetente(response.data)
            setSaldo(response.data.saldo)
        })
    }

    const buscarDestinatario = (token) => {
        axios.get(`http://127.0.0.1:8000/banco/contas/?cpf=${cpf}`, {headers:{Authorization: "JWT " + token}
        }).then((response) =>{
            let teste = response.data
            teste.forEach(element => {
                setContaDestinatario(element)
            });
            axios.post('http://127.0.0.1:8000/banco/transferencias/', {
                conta_destinatario: 0,
                valor: valor,
                cpf: cpf,
                conta_remetente: contaRemetente.id
            }, {headers:{Authorization: "JWT " + token}})
            .then((response) =>{
                console.log(response);
                alert("Tranferência realizada com sucesso!")
                limparInputs()
                setTimeout(() => {
                    navigation.navigate('Home', {token: token})
                }, 1000);
            })
            .catch((error) => {
                console.log(error)
                alert("Não foi possível realizar a tranferência!")
            })  
        })
    }

    const buscarDados = (token) => {
        axios.get('http://127.0.0.1:8000/auth/users/me', {headers:{Authorization: "JWT " + token}
        }).then((response) =>{
            if (response.status == 200){
                buscarDadosConta(response.data.id, token)
            } 
        })
    }

    const limparInputs = () => {
        setValor('')
        setCpf('')
    }

    return (
        <View style={styles.container}>
            <Text>Olá, User</Text>

            <Text style={styles.p}>Saldo</Text>
            <Text style={styles.saldo}>7,658.00</Text>

            <Text style={styles.fav}>Favoritos</Text>
            
            <Link to='/PixDois'>
            <View style={styles.photos}>
        
                <Image style={styles.person}
                        source={require('../../assets/mulher1.jpg')}>
                </Image>
                <Image style={styles.person}
                        source={require('../../assets/mulher2.jpg')}>
                </Image>
                <Image style={styles.person}
                        source={require('../../assets/mulher3.jpg')}>
                </Image>
            </View>
            </Link>
            <Text style={styles.p}>Transições recentes</Text >
    
            <Text style={styles.p} >Mary</Text>
            <Text style={styles.transicao}>Maio 29, 14:21</Text>
  
            <Text  style={styles.p}>Lana</Text>
            <Text style={styles.transicao}>Maio 29,  2:25</Text>
    
            <Text  style={styles.p}>Carol</Text>
            <Text style={styles.transicao}>Maio 29, 12:00</Text>

   
        </View>
    )
}