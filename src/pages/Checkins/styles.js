import styled from 'styled-components/native';
import Button from './../../components/Button';

export const Container = styled.View`
    flex: 1;
    background-color: #dbdbdb;
`;

export const Logo = styled.SafeAreaView`
    background-color: #fff;
    height: 90px;
    align-items: center;
    justify-content: center;
`;

export const ListContainer = styled.View`
    margin: 20px 20px;
`;

export const List = styled.FlatList``;

export const TextDate = styled.Text`
    color: #999999;
`;

export const TextCheckin = styled.Text`
    font-weight: bold;
`;

export const ButtonCheckin = styled(Button)`
    margin-bottom: 20px;
`;

export const ListData = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20px;
    background-color: #fff;
    margin-bottom: 10px;
`;
