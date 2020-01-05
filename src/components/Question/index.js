import React, {useState} from 'react';
import {Image, TouchableOpacity, Alert} from 'react-native';
import {useSelector} from 'react-redux';

import {Container, Logo, FormQuestion, TextInput} from './styles';

import Button from './../Button';

import api from './../../services/api';
import logo from './../../assets/logo1.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Question({navigation}) {
    const [message, setMessage] = useState('');

    const user = useSelector(state => state.auth.user);

    async function handleSubmit() {
        const question = message;
        if (question === '' || question === null) {
            return Alert.alert('Erro', 'Campo vazio! Pergunta não registrada.');
        }

        try {
            await api.post(`/students/${user.id}/help-orders`, {
                question,
            });
            Alert.alert('Informação', 'Sua pergunta foi enviada com sucesso!');
            navigation.navigate('Helper');
        } catch (error) {
            Alert.alert('Erro', 'Houve algum erro ao enviar sua pergunta.');
        }
    }

    function goCheckins() {
        navigation.navigate('Helper');
    }

    return (
        <Container>
            <Logo>
                <TouchableOpacity onPress={goCheckins}>
                    <Icon
                        name="arrow-left"
                        size={24}
                        style={{
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#000',
                            paddingLeft: 20,
                            paddingRight: 76,
                        }}
                    />
                </TouchableOpacity>
                <Image source={logo} />
            </Logo>
            <FormQuestion>
                <TextInput
                    placeholder="Inclua seu pedido de auxílio"
                    multiline={true}
                    value={message}
                    onChangeText={setMessage}
                />
                <Button onPress={handleSubmit}>Enviar Pergunta</Button>
            </FormQuestion>
        </Container>
    );
}
