import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router';
import { AppState } from '../../store';
import { fetchProducts, getProductsSelector, ProductsLoadingSelector } from '../../store/products';
import { Product } from '../Product';
import { Loader } from '../UI/Loader';
import { ProductCollection } from '../../types'
import styles from './ProductsPage.module.scss'
interface IProductsPage extends RouteChildrenProps<{ id: string }>{
    products?: ProductCollection;
    getProducts: () => void
    loading: boolean
}

class ProductsPage extends Component<IProductsPage> {
    componentDidMount() {
        this.props.getProducts()
    }

    renderList = () => {
        return <Grid container spacing={2}>
            { this.props.products!
        .filter((item) => item.listId === this.props.match?.params.id)
        .map(item => {
            return <Product key={item.id} item={item}/>
        })}
        </Grid>
        
    }
    render() {        
          return (
            <div className={styles.ProductPage}>
                    {this.props.loading? <Loader/> : this.renderList()}
            </div>          
        )
    }
}

const mapStateToProps = (state:AppState) => {
    return {
        products: getProductsSelector(state),
        loading: ProductsLoadingSelector(state)
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getProducts: () => dispatch(fetchProducts())
    }
}

const ConnectProductsPage = connect(mapStateToProps, mapDispatchToProps)(ProductsPage)

export { ConnectProductsPage as ProductsPage }
