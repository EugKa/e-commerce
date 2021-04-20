import { ACTION_TYPES } from "./types"
import * as api from '../../api';

export const fetchProductsStart = () => ({
    type: ACTION_TYPES.FETCH_PRODUCTS_START,
    
})

export const fetchProductsSuccess= (data: Array<any>) => ({
    type: ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
    payload:data
    
})

export const fetchProductsError = (eroor: any) => ({
    type: ACTION_TYPES.FETCH_PRODUCTS_ERROR,
    payload:eroor 
})

export const fetchProducts = () => {
    return (dispatch:any) => {
        dispatch(fetchProductsStart())
        try {
            api.getItems()
            .then(products => dispatch(fetchProductsSuccess(products))) 
        } catch (error) {
            dispatch(fetchProductsError(error.massage))
        }
    }
}


