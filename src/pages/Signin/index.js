import React, {useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import logo from './../../assets/logo.png';
import Button from './../../components/Button';
import {Container, Form, FormInput} from './styles';

import {signInRequest} from './../../store/modules/auth/actions';

export default function Signin() {
    const [userId, setUserId] = useState('');
    const dispatch = useDispatch();

    const loading = useSelector(state => state.auth.loading);

    async function handleSubmit() {
        dispatch(signInRequest(userId));
    }

    return (
        <Container>
            <Image source={logo} style={{height: 90, width: 150}} />
            <Form>
                <FormInput
                    placeholder="informe seu ID de cadastro"
                    value={userId}
                    onChangeText={setUserId}
                />
                <Button loading={loading} onPress={handleSubmit}>
                    Entrar no sistema
                </Button>
            </Form>
        </Container>
    );
}
