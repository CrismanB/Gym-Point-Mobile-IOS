import React from 'react';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import App from './App';

import {store, persistor} from './store';

export default function Index() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar barStyle="dark-content" backgroundColor={'#333'} />
                <App />
            </PersistGate>
        </Provider>
    );
}
