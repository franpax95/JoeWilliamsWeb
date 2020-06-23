import { 
    GET, 
    LOADING, 
    ERROR, 
    SHOW, 
    CHANGE_PAGE,
    CHANGE_DESCRIPTION 
} from '../types/expositionTypes';

const INITIAL_STATE = {
    expositions: [],
    exposition: {},
    currentPage: '',
    loading: false,
    error: '',
    form: {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
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
        
        case GET:
            return {
                ...state,
                expositions: action.payload,
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

        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case CHANGE_DESCRIPTION:
            return {
                ...state,
                exposition: {
                    description: action.payload
                }
            }
        
        default: 
            return state;
    }
}