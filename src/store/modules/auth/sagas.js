import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from './../../../services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
    try {
        const {userId} = payload;

        const {data} = yield call(api.get, `students/${userId}`);

        if (data === null) {
            Alert.alert('Login', 'Usuario nao encontrado.');
            yield put(signFailure());
            return;
        }

        yield put(signInSuccess(data));
    } catch (error) {
        Alert.alert('Falha na autenticação', 'verifique seus dados.');
        yield put(signFailure());
    }
}

export function signOut() {
    // history.push("/");
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
