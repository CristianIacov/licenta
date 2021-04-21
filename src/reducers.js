import { SIGNED_IN } from './constants.js';


const initialSignedIn = {
    isSignedIn: false
}


export const setSignedIn = (state = initialSignedIn, action = {}) => {

    switch(action.type){
        case SIGNED_IN:
            return Object.assign({}, state , {isSignedIn: action.payload })

        default:
            return state;
    }
}