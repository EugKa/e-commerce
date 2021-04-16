import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import {  selectCartItems } from '../../store/cart/selectors'
import { ProductCollection } from '../../types'
import { CartItem } from '../cart-item'
import { CustomButton } from '../UI/CustomButton'
import { RouteChildrenProps, withRouter } from 'react-router-dom'
import styles from './cart-dropdown.module.scss'
import { ROUTES_URLS } from '../App/routes'
import { toggleCartHidden } from '../../store/cart'
interface CartDropdownProps extends RouteChildrenProps {
    cartItems: ProductCollection
    onToggleCartHidden: () => void
}
const CartDropdown = ({cartItems, history, onToggleCartHidden}:CartDropdownProps) => {
    return (
        <div className={styles.CartDropdown}>
            <div className={styles.CartItems}>
                { cartItems.length 
                    ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem}/>
                        ))
                    )
                : (
                    <span className={styles.EmptyMassage}>Your cart is eprty</span>
                )
            }
            </div>
            <CustomButton 
                onClick={()=> {history.push(ROUTES_URLS.CHECKOUT) 
                    onToggleCartHidden()
                }} 
                type='black'>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    cartItems: selectCartItems(state)
})

const mapDispatchToProps = (dispatch:any) => ({
    onToggleCartHidden: () => dispatch(toggleCartHidden())
})

const ConnectCartDropdown =  withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))

export { ConnectCartDropdown as CartDropdown }
