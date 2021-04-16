
import { subscribe } from "../../utils/redux";
import { setCategories } from "./actions"
import {ACTION_TYPES} from './types'
import * as api from '../../api';
const fetchCategoriesWorker: any = ({dispatch}: {dispatch: any}) => {
  api.getList()
        .then(categories => dispatch(setCategories(categories))) 
      
}

const fetchMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.FETCH_CATEGORIES, fetchCategoriesWorker)(next, dispatch);

export const categoriesMiddleware = [fetchMiddleware];
