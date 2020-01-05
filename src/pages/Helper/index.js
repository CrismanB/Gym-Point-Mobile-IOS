import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {
    Container,
    Logo,
    List,
    ListContainer,
    ListData,
    TextAnswer,
    TextDate,
    ButtonCheckin,
    Form,
    TextQuestion,
} from './styles';

import {parseISO, formatDistance} from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from './../../services/api';
import logo from './../../assets/logo1.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Checkins({navigation}) {
    Icon.loadFont();

    const user = useSelector(state => state.auth.user);

    const [checkins, setCheckins] = useState([]);

    useEffect(() => {
        async function loadCheckins() {
            const {data} = await api.get(`/students/${user.id}/help-orders`);

            data.forEach(function(element) {
                element.dateFormatted = formatDistance(
                    parseISO(element.createdAt),
                    new Date(),
                    {addSuffix: true, locale: pt},
                );
            });

            setCheckins(data);
        }
        loadCheckins();
    }, []);

    async function handleSubmit(item) {
        if (item.answer && item.answer_at) {
            navigation.navigate('Answer', {
                question: item.question,
                created_at: item.createdAt,
                answer: item.answer,
                answer_at: item.answer_at,
            });
        } else {
            Alert.alert('Informação', 'Sem resposta para abrir esta pergunta.');
        }
    }

    function renderList(item) {
        return (
            <TouchableOpacity onPress={() => handleSubmit(item)}>
                <ListData>
                    <Form>
                        <TextAnswer>
                            {item.answer && item.answer_at ? (
                                <>
                                    <Icon
                                        name="check-circle"
                                        size={20}
                                        style={{
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: '#42cb59',
                                        }}
                                    />
                                    <Text
                                        style={{
                                            paddingLeft: 5,
                                            fontWeight: 'bold',
                                        }}>
                                        Respondido
                                    </Text>
                                </>
                            ) : (
                                <>
                                    <Icon
                                        name="check-circle"
                                        size={20}
                                        style={{
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: '#999999',
                                        }}
                                    />
                                    <Text
                                        style={{
                                            paddingLeft: 5,
                                            fontWeight: 'bold',
                                        }}>
                                        Sem resposta
                                    </Text>
                                </>
                            )}
                        </TextAnswer>
                        <TextDate>{item.dateFormatted}</TextDate>
                    </Form>
                    <TextQuestion numberOfLines={5}>
                        {item.question}
                    </TextQuestion>
                </ListData>
            </TouchableOpacity>
        );
    }

    return (
        <Container>
            <Logo>
                <Image source={logo} />
            </Logo>
            <ListContainer>
                <ButtonCheckin onPress={() => navigation.navigate('Question')}>
                    Novo pedido de auxílio
                </ButtonCheckin>
                <List
                    data={checkins}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => renderList(item)}
                />
            </ListContainer>
        </Container>
    );
}
