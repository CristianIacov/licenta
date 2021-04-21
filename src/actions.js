import { SIGNED_IN,
    LOGGED_IN_USER } from './constants.js';


export const setSignedIn = (text) => ({

    type: SIGNED_IN,
    payload: text
});


export const setLoggedInUser = (text) => ({

    type:LOGGED_IN_USER,
    payload: text
});