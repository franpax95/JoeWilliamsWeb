import { GET, LOADING, ERROR, SHOW } from '../types/expositionTypes';

const INITIAL_STATE = {
    expositions: [],
    exposition: {}
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SHOW:
            return {
                ...state,
                exposition: action.payload,
                loading: false,
                error: ''
            }

        case LOADING:
            return {
                ...state, 
                loading: true
            }

        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        
        default: 
            return state;
    }
}