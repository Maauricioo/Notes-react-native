import {CLICK_EDIT_VALUE, CLICK_ADD} from '../actions/actionType'

const initialState = {
    texto: '',
    id: 0
};

export const nota = (state = initialState, action) => {
    switch (action.type) {
        //Nota a ser editada
        case CLICK_EDIT_VALUE:
            return {
                id: action.payload.id,
                titulo: action.payload.titulo,
                texto: action.payload.texto
            };

        //Retorna ao estado inicial o modelo da nota editada
        case  CLICK_ADD:
            return initialState;
        default:
            return state;
    }
};