import React from "react";
import { connect } from "react-redux";
import { addCartItem, cleateItemFromCart, removeCartItem } from "../../store/cart";
import { IProduct } from "../../types";
import styles from "./checkout-item.module.scss";
interface CheckoutItemProps {
    cartItem: IProduct;
    clearItem: (item:IProduct) => void;
    addItem: (item:IProduct) => void;
    removeItem: (item:IProduct) => void;

}
const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}:CheckoutItemProps) => {
    const {name, image, price,quantity} = cartItem
    return (
        <div className={styles.CheckoutItem}>
        <div className={styles.ImageContainer}>
            <img src={image} alt="item"/>
        </div>
        <span className={styles.name}>{name}</span>
        <span className={styles.quantity}>
            <div className={styles.arrow} onClick={()=> removeItem(cartItem)}>&#10094;</div>
            <span className={styles.value}>{quantity}</span> 
            <div className={styles.arrow}onClick={()=> addItem(cartItem)}>&#10095;</div>
        </span>
        <span className={styles.price}>{price}</span>
        <div className={styles.RemoveButton} onClick={()=> clearItem(cartItem)}>&#10005;</div>
    </div>
    )
}

// const mapStateToProps = (state: AppState) => ({
    
// })

const mapDispatchToProps = (dispatch:any) => ({
    clearItem: (item:IProduct) => dispatch(cleateItemFromCart(item)),
    addItem: (item:IProduct) => dispatch(addCartItem(item)),
    removeItem: (item: IProduct) => dispatch(removeCartItem(item))
})

const ConnectCheckout = connect(null, mapDispatchToProps)(CheckoutItem)

export { ConnectCheckout as CheckoutItem}

