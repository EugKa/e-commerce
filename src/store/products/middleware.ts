
import { subscribe } from "../../utils/redux";
import { setProducts } from "./actions"
import {ACTION_TYPES} from './types'
import * as api from '../../api';
const fetchProductsWorker: any = ({dispatch}: {dispatch: any}) => {
  api.getItems()
        .then(products => dispatch(setProducts(products))) 
      
}

const fetchMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.FETCH_PRODUCTS, fetchProductsWorker)(next, dispatch);

export const productsMiddleware = [fetchMiddleware];
