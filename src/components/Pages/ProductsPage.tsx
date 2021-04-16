import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router';
import { AppState } from '../../store';
import { getDataProducts, getProductsSelector } from '../../store/products';
import { Product } from '../Product';
import { Loader } from '../UI/Loader';
import { ProductCollection } from '../../types'
interface IProductsPage extends RouteChildrenProps<{ id: string }>{
    products?: ProductCollection;
    getProducts: () => void
}

class ProductsPage extends Component<IProductsPage> {
    componentDidMount() {
        this.props.getProducts()
    }

    renderList = () => {
        return this.props.products!
        .filter((item) => item.listId === this.props.match?.params.id)
        .map(item => {
            return <Product key={item.id} item={item}/>
        })
    }
    render() {        
          return (
            <React.Fragment>
                <Grid container spacing={2}>
                {this.props.products!.length === 0 ? <Loader/> : this.renderList()}
                </Grid>
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state:AppState) => {
    return {
        products: getProductsSelector(state)
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getProducts: () => dispatch(getDataProducts())
    }
}

const ConnectProductsPage = connect(mapStateToProps, mapDispatchToProps)(ProductsPage)

export { ConnectProductsPage as ProductsPage }
