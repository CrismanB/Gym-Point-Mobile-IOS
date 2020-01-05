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

export const FormQuestion = styled.ScrollView`
    padding: 10px;
    margin: 20px 20px;
    border: 1px solid #bfbfbf;
    background-color: #fff;
    border-radius: 4px;
`;

export const TextDate = styled.Text`
    font-size: 14px;
    color: #999999;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`;
export const TextInfo = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;
export const TextResult = styled.Text`
    font-size: 16px;
    margin-bottom: 30px;
`;
