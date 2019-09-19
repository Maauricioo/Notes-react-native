import { CLICK_UPDATE_VALUE, CLICK_DELETE_VALUE, CLICK_EDIT_VALUE, CLICK_ADD, CLICK_UPDATE_NOTA } from '../actions/actionType'

//Cria nova nota
export const salvarNota = value => ({
    type: CLICK_UPDATE_VALUE,
    payload: {
        id: value.id,
        titulo: value.titulo,
        texto: value.texto,
    }
});

//Deleta nota
export const deletarNota = id => ({
    type: CLICK_DELETE_VALUE,
    id: id,
});

//Recupera nota a ser editada
export const editarNota = value => ({
    type: CLICK_EDIT_VALUE,
    payload: {
        id: value.id,
        titulo: value.titulo,
        texto: value.texto,
    }
})

//Apaga resquícios da nota editada
export const add = () => ({
    type: CLICK_ADD,
})

//Salva nota editada
export const salvaNotaEdit = nota => ({
    type:CLICK_UPDATE_NOTA,
    payload: {
        id: nota.id,
        titulo: nota.titulo,
        texto: nota.texto
    }
})

