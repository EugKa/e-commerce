import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Categories } from '../Categories';

import styles from './Home.module.scss'
import { AppState, getCategoriesSelector, getDataCategories } from '../../store';
import { connect } from 'react-redux';
import { Loader } from '../UI/Loader';
import { CategorieCollection } from '../../types';

interface HomePageProps {
    categories?: CategorieCollection;
    getCategories: () => void
}
class HomePage extends React.Component<HomePageProps> {
    
    componentDidMount() {
        this.props.getCategories()
    }
    renderList = () => {
        return <Grid container spacing={2} className={styles.MenuCategories}>
        {this.props.categories!.map(item => {
            return <Grid className={styles.item}  key={item.id} item xs={item.size}>
            <Categories {...item}/>
            </Grid>
        })}
    </Grid>
    }
    
    render() {
        return (
            <div className={styles.root}>
                {this.props.categories!.length === 0 ? <Loader/> : this.renderList()}
            </div>
            
        )
    }
}

const mapStateToProps = (state:AppState) => {
    return {
        categories: getCategoriesSelector(state)
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getCategories: () => dispatch(getDataCategories())
    }
}

const ConnectCategories = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export { ConnectCategories as HomePage }
