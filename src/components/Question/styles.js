import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #dbdbdb;
`;

export const Logo = styled.SafeAreaView`
    flex-direction: row;
    background-color: #fff;
    height: 90px;
    align-items: center;
`;

export const FormQuestion = styled.View`
    padding: 10px;
    margin: 20px 20px;
    border-radius: 4px;
`;

export const TextInput = styled.TextInput`
    padding-left: 5px;
    height: 350px;
    background-color: #fff;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 30px;
`;
