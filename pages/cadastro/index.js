import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Alert} from 'react-native';
import styles from './styles'
import axios from "axios";
import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
 

export default function Cadastro({navigation}) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [camposValidados, setCamposValidados] = useState(false)
    const [cep, setCep] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [imagem, setImagem] = useState()
    const [preview, setPreview] = useState()

    //Será executado sempre que o valor de 'cep' for alterado
    useEffect(() => {
      console.log(cep.length)
      console.log('usuario digitou')
    },[cep])


   //Função chamada quando o usuário digita no campo CEP
    const digitouCEP = (cep) => {
      setCep(cep)
      if (cep.length === 8){
          buscarCep(cep);
      }
  }

   //Função para buscar informações de endereço a partir do CEP usando a API VIacep (Coisas do Luciano)
 axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  const buscarCep = (cep) => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => {
        setEndereco(res.data.logradouro + ' - ' +  res.data.localidade)
        setEnderecoCompleto(res.data)
    })
}

    const goHome = () => {
      navigation.navigate("Home")
  }

  //Valida se todos os campos do formulário estão preenchidos
  useEffect(() => {
    if (email == "" || senha == "" || cpf == "" || cep == "" || nome == ""){
        setCamposValidados(false)
    }else{
        setCamposValidados(true)
    }})

    //Função chamada ao clicar no botão "Cadastrar", Verifica os campos 
    //na API e verifica se o usuario digitou corretamente.
    const btnCadastro = async () => {
      const infoDoCadastro = { nome_cliente: nome, cpf_cnpj: cpf, email: email, data_nascimento_criacao: dataNascimento, password: senha, cep: cep }
      if (senha.length < 8) {
          alert('A senha deve ser maior que 8 caracteres')
          return
      }
      else if (!email.includes("@") || !email.includes(".com")) {
          alert('O e-mail é inválido')
          return
      } else if (cpf.length != 11) {
          alert('O CPF é inválido')
          return
      } else if (cep.length != 8) {
          alert('O CEP é inválido')
          return
      } else if (nome.length === 0) {
          alert('Digite seu nome')
          return
      } else if(dataNascimento.length != 10 || !dataNascimento.includes("-")){
          alert("Escreva a data de nascimento em um formato válido: AAAA-MM-DD")
      }

      try {
          const retornoRequisicaoCadastro = await axios.post(`http://127.0.0.1:8000/auth/users/`, infoDoCadastro)

          const idUserCadastrado = retornoRequisicaoCadastro.data.id;    

          alert("Você foi cadastrado com sucesso e sua conta do banco criada. Aproveite!")
          navigation.navigate("Login");
          
      } catch (error) {
          if (error.response.status === 401) {
              alert("Esse E-mail já pertence a um usuário...")
          } else {
              alert("Não foi possível realizar o cadastro!")
          }
      }

  }

  const galeria= async () =>{
     //Função para escolher uma imagem da galeria
    let result = ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    })

    if(!(await result).canceled){
        setPreview((await result).assets[0].uri)
        setImagem(";base64," + await FileSystem.readAsStringAsync((await result).assets[0].uri, { encoding: 'base64' }))
    }
}
        const camera= async () =>{
             //Função para tirar uma foto (Não está funcionando direito no WEB)
            let result = ImagePicker.launchCameraAsync({
                allowsEditing: true,
            })

            if(!(await result).canceled){
                setPreview((await result).assets[0].uri)
                setImagem(";base64," + await FileSystem.readAsStringAsync((await result).assets[0].uri, { encoding: 'base64' }))
            }
        }

        const escolherFoto = () => {
            Alert.alert(
                'SELECIONAR',
                'Selecione',
                [
                    {
                        text: 'Galeria',
                        onPress: () => galeria()
                    },
                    {
                        text: 'Camera',
                        onPress: () => camera()
                    }
                ]
            )
        }

        const upload = () => {
        //Função para fazer upload de ums imagem (não esta funcionando corretamente)
          if(!preview) {
              alert("Escolha uma foto")
          } else {
              criarUsuario()
          }
      }
      
    return (
      //Campos e outros estilos da página.
        <View style={styles.container}>
           <TouchableOpacity onPress={escolherFoto}>
                    <View>
                        <Image src={preview} style={styles.foto}/>
                    </View>
                </TouchableOpacity>
          <View style={styles.container1}>
          <View style={styles.logo}>
                <Image style={styles.logo}
                    source={require('../../assets/logo.png')}></Image>
                </View>
             </View>

          <View style={styles.container2}>
            <View style={styles.campo}>
              <TextInput
                style={styles.caixa1}
                placeholder="Digite seu nome completo"
                KeyboardType='text'
                value={nome}
                onChangeText={(e) => { setNome(e) }}
            />
            </View>

    
           <View style={styles.campo}>
              <TextInput
               style={styles.caixa1}
                placeholder="Digite seu E-mail"
                KeyboardType='email'
                value={email}
                onChangeText={(e) => { setEmail(e) }}
            />
            </View>

    
            <View style={styles.campo}>
              <TextInput
                style={styles.caixa1}
                placeholder="Digite seu CPF"
                            KeyboardType='number'
                            value={cpf}
                            onChangeText={(e) => { setCpf(e) }}
                        />
            </View>
    
            <View style={styles.campo}>
              <TextInput
                style={styles.caixa1}
                placeholder="Digite seu CEP"
                            KeyboardType='number'
                            value={cep}
                            onChangeText = {(e) =>{digitouCEP(e)}} 
                        />
            </View>


            <View style={styles.campo}>
              <TextInput
                style={styles.caixa1} secureTextEntry={true}
                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => { setSenha(e) }}
                                onChangeText={(e) => { setSenha(e) }}
                      />
            </View>

            
            <View style={styles.campo}>
              <TextInput
                style={styles.caixa1}
                            placeholder="AAAA-MM-DD"
                            value={dataNascimento}
                            onChangeText={(e) => { setDataNascimento(e) }}
                      />
            </View>
    
            <View style={styles.foto0}>
            </View>

          </View>
    
          <View>
            <Text style={styles.sucesso}></Text>
          </View>
    
    
          <View style={styles.btnContainer}>      
          <TouchableOpacity style={styles.botao} onPress={upload}> 
                        <Text style={{color: '#fff'}}>Enviar</Text>    
                    </TouchableOpacity>    
            <TouchableOpacity  onPress={() => btnCadastro()} disabled={!camposValidados} style={styles.btn}>
              <Text style={styles.txtButton} validacao={camposValidados} onPress={goHome}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }