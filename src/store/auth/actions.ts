import { ACTION_TYPES } from "./types";
export const readUser = () => ({
    type: ACTION_TYPES.READ_USER,

    
})
export const setCurrentUser = (user: any) => ({
    type: ACTION_TYPES.SET_USER,
    payload: user
    
})