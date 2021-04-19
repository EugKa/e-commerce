import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../store";
import { selectCartItems, selectCartTotal } from "../../store/cart/selectors";
import { ProductCollection } from "../../types";
import { ROUTES_URLS } from "../App/routes";
import { CheckoutItem } from "../checkout-item";

import styles from "./Checkout.module.scss";

interface CheckoutProps {
    cartItems: ProductCollection
    total: any
}
const Checkout = ({cartItems, total}:CheckoutProps) => (
  <div className={styles.CheckoutPage}>
    <Grid container justify="space-between" className={styles.CheckoutHeader}>
      <Grid item xs={3} md={3} className={styles.HeaderBlock}>
        <span>Product</span>
      </Grid>
      <Grid item xs={3} md={3} className={styles.HeaderBlock}>
        <span>Description</span>
      </Grid>
      <Grid item xs={3} md={3} className={styles.HeaderBlock}>
        <span>Quantity</span>
      </Grid>
      <Grid item xs={1} md={2} className={styles.HeaderBlock}>
        <span>Price</span>
      </Grid>
      <Grid item xs={2} md={1} className={styles.HeaderBlock}>
        <span>Remove</span>
      </Grid>
    </Grid>
    {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
    <div className={styles.total}>
      TOTAL: ${total}
    </div>
    {/* <StripeCheckoutButton price={total}/> */}
    <Link to={ROUTES_URLS.PAYMENT} className={styles.PayLink}>
      <h2>
        Pay
      </h2>
    </Link>
  </div>
);

const mapStateToProps = (state:AppState) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
})



const ConnectCheckout = connect(mapStateToProps)(Checkout)
export {ConnectCheckout as Checkout}