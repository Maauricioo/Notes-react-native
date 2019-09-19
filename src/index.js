import React from 'react';
import Routes from './routes';
import './config/statusBar'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Store, Persistor } from './store';

import { Root } from "native-base";

const App = () =>
    <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor} >
            <Root>
                <Routes />
            </Root>
        </PersistGate>
    </Provider>;

export default App;