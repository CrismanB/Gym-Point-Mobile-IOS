import React, {useState, useEffect} from 'react';
import {Image, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {
    Container,
    Logo,
    List,
    ListContainer,
    ListData,
    TextCheckin,
    TextDate,
    ButtonCheckin,
} from './styles';

import {parseISO, formatDistance} from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from './../../services/api';
import logo from './../../assets/logo1.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Checkins() {
    Icon.loadFont();

    const user = useSelector(state => state.auth.user);

    const [checkins, setCheckins] = useState([]);

    useEffect(() => {
        async function loadCheckins() {
            const {data} = await api.get(`/students/${user.id}/checkins`);

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

    async function handleSubmit() {
        try {
            await api.post(`/students/${user.id}/checkins`);
            Alert.alert('check-in', 'Check-in feito com sucesso.');
        } catch (error) {
            if (error.response.status === 401) {
                Alert.alert(
                    'Limite de checkin',
                    'Você não pode fazer check-in nesta semana. O limite é de 5 por semana.',
                );
            } else {
                Alert.alert('Erro', ' Erro ao fazer check-in.');
            }
        }
    }

    function renderList(item) {
        return (
            <ListData>
                <TextCheckin>Check-in #{item.id}</TextCheckin>
                <TextDate>{item.dateFormatted}</TextDate>
            </ListData>
        );
    }

    return (
        <Container>
            <Logo>
                <Image source={logo} />
            </Logo>
            <ListContainer>
                <ButtonCheckin onPress={handleSubmit}>Checkin</ButtonCheckin>
                <List
                    data={checkins}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => renderList(item)}
                />
                {/*
                 */}
            </ListContainer>
        </Container>
    );
}

Checkins.navigationOptions = {
    tabBarLabel: 'check-ins',
    tabBarIcon: <Icon name="list" size={24} />,
};
