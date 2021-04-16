import React from 'react'
import { IProduct } from '../../types'
import styles from './cart-item.module.scss'
interface CartItemProps {
    item: IProduct
}
export const CartItem = ({item:{image, price, name, quantity}}:CartItemProps) => (
    <div className={styles.CartItem}>
        <img src={image} alt="item"/>
        <div className={styles.ItemDetails}>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>
                {quantity} X ${price}
            </div>
        </div>
    </div>
)
