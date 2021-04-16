import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { selectCartItems, selectCartTotal } from "../../store/cart/selectors";
import { ProductCollection } from "../../types";
import { CheckoutItem } from "../checkout-item";
import { StripeCheckoutButton } from "../stripe-button";
import styles from "./Checkout.module.scss";
interface CheckoutProps {
    cartItems: ProductCollection
    total: any
}
const Checkout = ({cartItems, total}:CheckoutProps) => (
  <div className={styles.CheckoutPage}>
    <div className={styles.CheckoutHeader}>
      <div className={styles.HeaderBlock}>
        <span>Product</span>
      </div>
      <div className={styles.HeaderBlock}>
        <span>Description</span>
      </div>
      <div className={styles.HeaderBlock}>
        <span>Quantity</span>
      </div>
      <div className={styles.HeaderBlock}>
        <span>Price</span>
      </div>
      <div className={styles.HeaderBlock}>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
    <div className={styles.total}>
      TOTAL: ${total}
    </div>
    <div className={styles.TestWarning}>
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Epx: 01/22 - CW: 123 
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = (state:AppState) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
})

const mapDispatchToProps = {
    
}


const ConnectCheckout = connect(mapStateToProps, mapDispatchToProps)(Checkout)
export {ConnectCheckout as Checkout}