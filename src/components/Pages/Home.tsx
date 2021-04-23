import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Categories } from '../Categories';

import styles from './Home.module.scss'
import { AppState, getCategoriesSelector, fetchCategoriesStart, CategoriesLoadingSelector } from '../../store';
import { connect } from 'react-redux';
import { Loader } from '../UI/Loader';
import { CategorieCollection } from '../../types';
interface HomePageProps {
    categories?: CategorieCollection;
    getCategories: () => void
    loading: boolean
}
class HomePage extends React.Component<HomePageProps> {
    
    componentDidMount() {
        this.props.getCategories()
    }
    renderList = () => {
        return <Grid container spacing={2} className={styles.MenuCategories}>
            {this.props.categories!.map(item => {
                return <Grid className={styles.item}  key={item.id} item xs={6} sm={item.size}>
                <Categories {...item}/>
                </Grid>
            })}
        </Grid>
    }

    
    
    render() {
        // console.log(`categories`,  this.props.categories)
        return (
            <div className={styles.root}>
                {this.props.loading ? <Loader/> : this.renderList()}
            </div>
            
        )
    }
}

const mapStateToProps = (state:AppState) => {
    return {
        categories: getCategoriesSelector(state),
        loading: CategoriesLoadingSelector(state)
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getCategories: () => dispatch(fetchCategoriesStart())
    }
}

const ConnectCategories = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export { ConnectCategories as HomePage }
