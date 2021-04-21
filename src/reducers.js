import { SIGNED_IN,
        LOGGED_IN_USER } from './constants.js';


const initialSignedIn = {
    isSignedIn: false
};


const initialLoggedUser = {
    user: []
};

export const setSignedIn = (state = initialSignedIn, action = {}) => {

    switch(action.type){
        case SIGNED_IN:
            return Object.assign({}, state , {isSignedIn: action.payload })

        default:
            return state;
    }
};

export const setLoggedInUser = (state = initialLoggedUser, action = {}) => {

    switch(action.type){
        case LOGGED_IN_USER:
            return Object.assign({}, state , {user: action.payload })

        default:
            return state;
    }
};