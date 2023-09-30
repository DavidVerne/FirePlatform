import { SET_USERNAME } from './actions';
import { SET_ACCESSTOKEN } from './actions';

const initialState = {
    username: '',
    accessToken: '',
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case SET_ACCESSTOKEN:
            return {
                ...state,
                accessToken: action.payload,
            };
        default:
            return state;
    }
};