import { AppState } from "..";
import { ProductCollection } from "../../types";

export const getProductsSelector = (state: AppState) : ProductCollection => state.products.products
export const ProductsLoadingSelector = (state: AppState) : boolean => state.products.loading
