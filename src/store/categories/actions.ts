import { ACTION_TYPES } from "./types"

export const getDataCategories = () => ({
    type: ACTION_TYPES.FETCH_CATEGORIES,
    
})

export const setCategories = (data: Array<any>) => ({
    type: ACTION_TYPES.SET_CATEGORIES,
    payload:data
    
})