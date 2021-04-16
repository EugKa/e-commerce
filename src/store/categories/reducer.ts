import { CategorieCollection } from '../../types';
import { ACTION_TYPES } from './types';

export interface CategoriesState {
  categories: CategorieCollection;
}
const INITIAL_STATE = {
  categories: []
};



const categoriesReducer = (state: CategoriesState = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export default categoriesReducer