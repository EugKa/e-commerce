import { ProductCollection } from '../../types';
import { ACTION_TYPES } from './types';

export interface ProductsState {
  products: ProductCollection;
}
const INITIAL_STATE = {
  products: []
};



const productsReducer = (state: ProductsState = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ACTION_TYPES.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default productsReducer