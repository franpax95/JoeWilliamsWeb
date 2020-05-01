import axios from 'axios';
import { 
    GET, 
    LOADING, 
    ERROR, 
    SHOW, 
    CHANGE_DESCRIPTION 
} from '../types/expositionTypes';

export const getExposition = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try{
        const response = await axios.get(`/api/expositions/${id}`);
        dispatch({
            type: SHOW,
            payload: response.data
        });
    }catch(error){
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: 'No se puede acceder a este ejercicio en este momento'
        });
    }
}

export const changeDescription = (newDescription) => (dispatch) => {
    dispatch({
        type: CHANGE_DESCRIPTION,
        payload: newDescription
    });
}