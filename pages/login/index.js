import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import styles from './styles'
import React, { useState } from 'react';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [senha, setsenha] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);
  const [camposValidados, setCamposValidados] = useState(false)

  //Função para atualizar o estado da senha
  const handlesenhaChange = (text) => {
    setsenha(text);
  };

  //Verifica se os campos email e senha estão vazios
    useEffect(() => {
    if (email == "" || senha == ""){
        setCamposValidados(false)
    }else{
        setCamposValidados(true)
    }})
   
    const goCadastro = () => {
        navigation.navigate("Cadastro")
    }

    const logar = async () => {
        try {
          //POST para autenticar o usuário
            const response = await axios.post(`http://127.0.0.1:8000/auth/jwt/create`,{ email: email, password: senha});
            console.log(response)
            //Se passar o token va para o armazenadomento e direciona o usuario para Home
            if (response.status === 200) {
              await AsyncStorage.setItem("token", response.data.auth_token);
              navigation.navigate("Home")
            }
        } catch (err) {
          //Catch para erro exibindo o Alert referente ao erro
            if (err.response && err.response.status === 401 || err.response.status === 400) {
                alert('E-mail ou senha incorretos!')  
            }else{
                console.log(err.response.data);
                alert('Não foi possível logar')
            }
        }
    }

    const handleFormSubmit = () => {
      if (senha === "senha_correta") {
        //Senha correta, desbloquear e reiniciar tentativas
        setLocked(false);
        setAttempts(0);
        setsenha("");
      } else {
        //Senha incorreta, incrementar tentativas
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        if (newAttempts >= 3) {
          //Mais de 3 tentativas, bloqueeia o usuario
          setLocked(true);
        }
      }
    };


    //Inputs para os camppos, View raiz com os estilos e etc...
    return (
            <View style={styles.container}>
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
                    placeholder="Digite seu e-mail"
                      placeholderTextColor="gray"
                      KeyboardType='text'
                      value={email}
                      onChangeText={(e) => { setEmail(e) }}
                            />
                </View>
            <View style={styles.campo}>
              {/* Se o usuario for bloueado, aqui aparecerá o Texto para o usuario bloqueado */}
                {locked ? (
                <Text style={{ fontSize: 24 }}>Você foi bloqueado!</Text>
                ) : (
                <TextInput secureTextEntry={true}
                style={styles.caixa1}
                value={senha}
                onChangeText={handlesenhaChange}
                editable={!locked}
                placeholder="Digite sua senha"
                placeholderTextColor="gray"

            
              />
              )}
              </View>
          


            <View style={styles.btnContainer}>
            <View style={styles.figura}>
                    <TouchableOpacity disabled={!camposValidados} onPress={() => logar()}>
                        <Text style={styles.txtButton} validacao={camposValidados}>Login</Text>
                </TouchableOpacity>
                </View>
                
            <View style={styles.figura1}>
            <TouchableOpacity  onPress={handleFormSubmit} disabled={locked}  style={styles.btn}>
              <Text style={styles.txtButton} onPress={goCadastro}>Cadastrar</Text>
            </TouchableOpacity>
            </View>
          </View>
            </View>
        </View>
    )
}