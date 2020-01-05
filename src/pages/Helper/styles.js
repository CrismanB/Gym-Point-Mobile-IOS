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

export const ButtonCheckin = styled(Button)`
    margin-bottom: 20px;
`;

export const ListData = styled.View`
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 20px;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 4px;
`;

export const Form = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TextQuestion = styled.Text`
    padding: 20px 0;
    font-size: 16px;
`;

export const TextAnswer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextDate = styled.Text`
    font-size: 12px;
    color: #999999;
`;
