import { AppState } from "..";
import { CategorieCollection } from "../../types";

export const getCategoriesSelector = (state: AppState) : CategorieCollection => state.categories.categories
