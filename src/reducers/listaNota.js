import { CLICK_UPDATE_VALUE, CLICK_DELETE_VALUE, CLICK_UPDATE_NOTA } from '../actions/actionType'

const initialState = {
    listaNotas: []
};

export const listaNota = (state = initialState, action) => {
    switch (action.type) {

        //Salva nova nota
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                listaNotas: [...state.listaNotas, {
                    id: action.payload.id,
                    titulo: action.payload.titulo,
                    texto: action.payload.texto
                }]
            };

        //Deleta nota
        case CLICK_DELETE_VALUE:
            let newState = [...state.listaNotas];
            let item = newState.find((e) => (e.id == action.id));
            let index = newState.indexOf(item);
            newState.splice(index, 1);
            return {
                ...state,
                listaNotas: newState
            };

        //Atualiza nota editada
        case CLICK_UPDATE_NOTA:
            newState = [...state.listaNotas];
            item = newState.find((e) => (e.id == action.payload.id));
            index = newState.indexOf(item);
            newState.splice(index, 1, action.payload)
            return{
                ...state,
                listaNotas: newState
            }
        default:
            return state;
    }
};