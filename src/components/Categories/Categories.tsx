import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Categories.module.scss'
import { ROUTES_URLS } from '../App/routes'
import Paper from '@material-ui/core/Paper';
interface ICategories {
    id?:string;
    image?: string;
    title?: string
}

export const Categories = ({image, id, title}:ICategories): JSX.Element => {
    return (
        <Paper className={styles.paper} style={{backgroundImage: `url(${image})`}}>
            <Link className={styles.link} 
                to={`${ROUTES_URLS.PRODUCT}/${id}`}>
                {title}
            </Link>
        </Paper>
        
    )
}
