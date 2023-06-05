import { useState } from 'react';
import { Text, TouchableOpacity, TextInput, Picker } from 'react-native';
import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
import styles from './styles';

export default function Loan() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [renda, setRenda] = useState('');
    const [objetivoEmprestimo, setObjetivoEmprestimo] = useState('');
    const [parcelas, setParcelas] = useState(1);
    const [valorSolicitado, setValorSolicitado] = useState('');
    const [porcentagemJuros, setPorcentagemJuros] = useState(0);
    const [podeSolicitar, setPodeSolicitar] = useState(false);


    //Essa parte do código tenta obter o token CSRF do cookie
    //Utilizei pois estava com problemas de erro 405 e de cookies.
    //É uma medida de segurança
    const csrfToken = document.cookie
        .split(';')
        .find(cookie => cookie.trim().startsWith('csrftoken='))
        ?.split('=')[1];
    
    //Função para verificar se o usuario tem direito a o emprestimo
    //Se a renda for maior ue 1000
    const handleLoanRequest = () => {
        if (renda === '' || parseInt(renda) < 1000) {
            setPodeSolicitar(false);
            return;
        }

        axios
            .get('http://127.0.0.1:8000/csrf/')
            .then(response => {
                const csrfToken = response.headers['set-cookie'][0].split(';')[0].split('=')[1];

                axios
                    .post('http://127.0.0.1:8000/api/emprestimos/', emprestimoData, {
                        headers: {
                            'X-CSRFToken': csrfToken,
                        },
                    })
                    .then(response => {
                        console.log(response.data);
                        setPodeSolicitar(true); // Define que o empréstimo pode ser solicitado
                    })
                    .catch(error => {
                        console.error(error.response.data);
                        setPodeSolicitar(false); // Define que o empréstimo não pode ser solicitado
                    });
            })
            .catch(error => {
                console.error('Failed to get CSRF token:', error);
            });
    };

    //Função chamada quando altera o texto do 'valor solicitado'
    const handleValorChange = text => {
        setValorSolicitado(text);
        setPorcentagemJuros(getPorcentagemJuros(parseFloat(text)));
    };

    //Calcula a porcentagem do juros
    const getPorcentagemJuros = valor => {
        if (valor >= 1000 && valor <= 5000) {
            return 5;
        } else if (valor > 5000 && valor <= 10000) {
            return 10;
        } else if (valor > 100000) {
            return 15;
        } else {
            return 0;
        }
    };

  return (
    <>
     <Text style={styles.seta}>
                Categorias
            </Text>
        <TextInput
                style={styles.preco}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.preco}
                placeholder="CPF"
                value={cpf}
                keyboardType='numeric'
                onChangeText={setCpf}
            />
            <TextInput
                style={styles.preco}
                placeholder="Renda"
                keyboardType="numeric"
                value={renda}
                onChangeText={setRenda}
            />
            <TextInput
                style={styles.preco}
                placeholder="Objetivo do Empréstimo"
                value={objetivoEmprestimo}
                onChangeText={setObjetivoEmprestimo}
            />
            <TextInput
                style={styles.preco}
                keyboardType="numeric"
                value={valorSolicitado}
                placeholder="Valor Solicitado"
                onChangeText={handleValorChange}
            />
            {/* O Picker é uma biblioteca para gerar ComboBox que
            o usuario pode esxolher quantas parcelas ele quer */}
            <Picker
                style={styles.preco}
                selectedValue={parcelas}
                onValueChange={(itemValue) => setParcelas(itemValue)}
            >
                {[...Array(12)].map((_, index) => (
                    <Picker.Item key={index + 1} label={`${index + 1} parcela(s)`} value={index + 1} />
                ))}
            </Picker>

            {/* Mensagem que aprece para o usuario caso ele não tenha direito ao empréstimo */}
            {renda !== '' && parseInt(renda) < 1000 && (
                <Text style={styles.textoResultado}>Empréstimo não pode ser solicitado</Text>
            )}

            {podeSolicitar && (
                <Text style={styles.textoResultado}>Empréstimo pode ser solicitado</Text>
            )}
            <Text style={styles.textoResultado}>Porcentagem de juros: {porcentagemJuros}%</Text>

            <TouchableOpacity style={styles.botao} onPress={handleLoanRequest}>
                <Text style={styles.txtButton}>continuar</Text>
            </TouchableOpacity>

        </>
    );
}

   