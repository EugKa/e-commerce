import { AppState } from "..";
import { CategorieCollection } from "../../types";

export const getCategoriesSelector = (state: AppState) : CategorieCollection => state.categories.categories
export const CategoriesLoadingSelector = (state: AppState) : boolean => state.categories.loading
