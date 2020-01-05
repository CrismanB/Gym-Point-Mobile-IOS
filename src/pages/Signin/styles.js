import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    background-color: #fff;
`;

export const Form = styled.View`
    margin-top: 30px;
    align-self: stretch;
`;

export const FormInput = styled.TextInput`
    font-size: 16px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    height: 46px;
    margin-bottom: 10px;
    padding-left: 10px;
`;
