import { IProduct, ProductCollection } from "../../types";
import { ACTIONS_TYPE } from "./types";

export const toggleCartHidden = () => ({
    type: ACTIONS_TYPE.TOGGLE_CART_HIDDEN
})
export const addCartItem = (item: IProduct) => ({
    type: ACTIONS_TYPE.ADD_CART_ITEM,
    payload: item
})


export const cleateItemFromCart = (item:IProduct) => ({
    type: ACTIONS_TYPE.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeCartItem = (item:IProduct) => ({
    type: ACTIONS_TYPE.REMOVE_ITEM,
    payload: item
})

export const removeAllCartItems = (items:ProductCollection) => ({
    type: ACTIONS_TYPE.REMOVE_ALL_ITEMS,
    payload: items
})