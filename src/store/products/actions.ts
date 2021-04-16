import { ACTION_TYPES } from "./types"

export const getDataProducts = () => ({
    type: ACTION_TYPES.FETCH_PRODUCTS,
    
})

export const setProducts = (data: Array<any>) => ({
    type: ACTION_TYPES.SET_PRODUCTS,
    payload:data
    
})