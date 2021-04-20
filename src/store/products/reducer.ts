import { ProductCollection } from '../../types';
import { ACTION_TYPES } from './types';

export interface ProductsState {
  products: ProductCollection;
  loading: boolean;
  errorMassage: null;
}
const INITIAL_STATE = {
  products: [],
  loading: true,
  errorMassage: null,
};



const productsReducer = (state: ProductsState = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ACTION_TYPES.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading:true
      }
    case ACTION_TYPES.FETCH_PRODUCTS_SUCCESS :
      return {
         ...state, 
         products: payload,
         loading:false
        };
    case ACTION_TYPES.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        errorMassae: payload
      }
    default:
      return state;
  }
};

export default productsReducer