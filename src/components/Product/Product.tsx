import { Grid, Paper } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { CustomButton } from '../UI/CustomButton';
import styles from './Product.module.scss'
import { addCartItem } from '../../store/cart'
import { IProduct } from '../../types';
interface ProductProps {
    item: IProduct
    addItem: (item:IProduct) => void
}


const Product = ({item, addItem}:ProductProps) => {
       const { name, price, image } = item;
        return (
            <Grid item xs={6} sm={4} md={3} className={styles.Product}>
            <Paper
            className={styles.image}
            style={{
                backgroundImage: `url(${image})`
            }}
            />
            <div className={styles.productFooter}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>${price}</span>
            </div>
            <CustomButton type="black-invert" onClick={()=> addItem(item)}>
                ADD TO CART
            </CustomButton>
        </Grid>
        )
}



const mapDispatchToProps = (dispatch:any) => ({
    addItem: (item:IProduct) => dispatch(addCartItem(item))
})

const ConnectProduct = connect(null, mapDispatchToProps)(Product)
export { ConnectProduct as Product }

