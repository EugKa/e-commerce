import React from 'react'
import styles from './cart-icon.module.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../store/cart'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import {  selectCartItemsCount } from '../../store/cart/selectors'
interface CartIconProps {
    toggleCartHidden: () => void
    itemCount: any
}
const CartIcon = ({toggleCartHidden, itemCount}:CartIconProps) => {
    return (
        <div className={styles.cartIcon} onClick={toggleCartHidden}>
            <ShoppingIcon className={styles.icon}/>
            <span className={styles.itemCount}>{itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch:any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const ConnectCartIcon = connect(mapStateToProps, mapDispatchToProps)(CartIcon)

export { ConnectCartIcon as CartIcon}
