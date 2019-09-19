import { nota } from './nota';
import { listaNota } from './listaNota';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    nota,
    listaNota
});