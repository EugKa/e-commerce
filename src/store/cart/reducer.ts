import { ACTIONS_TYPE } from "./types";
import { addItemToCart, removeItemFromCart } from '../../utils/cart'
import { ProductCollection } from "../../types";
export interface CartState {
    hidden: boolean
    cartItems: ProductCollection
}

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

const cartReducer = (state: CartState = INITIAL_STATE, {type,payload}:any) => {
    switch (type) {
        case ACTIONS_TYPE.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ACTIONS_TYPE.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload),
            }    
        case ACTIONS_TYPE.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== payload.id
                    )
            }
        case ACTIONS_TYPE.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, payload)
            }
        case ACTIONS_TYPE.REMOVE_ALL_ITEMS:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    items => items.length !== payload.length
                ),
            }    
        default:
            return state;
    }
}

export default cartReducer