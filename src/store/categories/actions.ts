import { ACTION_TYPES } from "./types"
import * as api from '../../api';

export const fetchCategoriesStart = () => ({
    type: ACTION_TYPES.FETCH_CATEGORIES_START,  
})

export const fetchCategoriesSuccess = (data: Array<any>) => ({
    type: ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    payload:data
})
export const fetchCategoriesError = (error: any) => ({
    type: ACTION_TYPES.FETCH_CATEGORIES_ERROR,
    payload:error
})


export const fetchCategories = () => {
    return (dispatch:any) => {
        dispatch(fetchCategoriesStart())
        try {
            api.getList().then(categories => dispatch(fetchCategoriesSuccess(categories)))
          } catch (error) {
            dispatch(fetchCategoriesError(error.massage))
          }
    }
}