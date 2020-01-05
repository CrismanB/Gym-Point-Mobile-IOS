import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';

import {
    Container,
    Logo,
    FormQuestion,
    Header,
    TextDate,
    TextInfo,
    TextResult,
} from './styles';

import {parseISO, formatDistance} from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from './../../services/api';
import logo from './../../assets/logo1.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Answer({navigation}) {
    Icon.loadFont();
    const [question, setQuestion] = useState('');
    const [createdAt, setCreatedAt] = useState(Date);
    const [answer, setAnswer] = useState('');
    const [answerAt, setAnswerAt] = useState(Date);

    useEffect(() => {
        setQuestion(navigation.getParam('question'));
        setAnswer(navigation.getParam('answer'));

        try {
            setCreatedAt(
                formatDistance(
                    parseISO(navigation.getParam('created_at')),
                    new Date(),
                    {addSuffix: true, locale: pt},
                ),
            );
            setAnswerAt(
                formatDistance(
                    parseISO(navigation.getParam('answer_at')),
                    new Date(),
                    {addSuffix: true, locale: pt},
                ),
            );
        } catch (error) {
            setCreatedAt(navigation.getParam('created_at'));
            setAnswerAt(navigation.getParam('answer_at'));
        }
    }, []);

    async function handleSubmit() {
        navigation.navigate('Helper');
    }

    return (
        <Container>
            <Logo>
                <TouchableOpacity onPress={handleSubmit}>
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
                <Header>
                    <TextInfo>Pergunta</TextInfo>
                    <TextDate>{createdAt}</TextDate>
                </Header>
                <TextResult>{question}</TextResult>
                <Header>
                    <TextInfo>Resposta</TextInfo>
                    <TextDate>{answerAt}</TextDate>
                </Header>
                <TextResult>{answer}</TextResult>
            </FormQuestion>
        </Container>
    );
}
