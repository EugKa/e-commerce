import { CategorieCollection } from '../../types';
import { ACTION_TYPES } from './types';

export interface CategoriesState {
  categories: CategorieCollection;
  loading: boolean;
  errorMassage: null

}
const INITIAL_STATE = {
  categories: [],
  loading: false,
  errorMassage: null
};



const categoriesReducer = (state: CategoriesState = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        loading: true
      }
    case ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
         ...state, 
         categories: payload,
         loading: false 
        };
    case ACTION_TYPES.FETCH_CATEGORIES_ERROR:
        return {
          ...state,
          loading: false,
          errorMassage: payload
        }
    default:
      return state;
  }
};

export default categoriesReducer