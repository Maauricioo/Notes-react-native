import { createStore } from 'redux';
import { Reducers } from '../reducers';

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'principal',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, Reducers)

const Store = createStore(persistedReducer);
const Persistor = persistStore(Store);

export {Store, Persistor};