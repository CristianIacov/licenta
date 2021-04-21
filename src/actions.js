import { SIGNED_IN } from './constants.js';


export const setSignedIn = (text) => ({

    type: SIGNED_IN,
    payload: text
});