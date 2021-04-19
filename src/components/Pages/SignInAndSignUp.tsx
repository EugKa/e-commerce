import { Grid } from '@material-ui/core'
import React from 'react'
import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'
export const SignInAndSignUp = () => {
    return (
        <Grid container spacing={2} justify="space-evenly">
            <Grid item xs={12} sm={6} md={4}>
                <SignIn/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <SignUp/>
            </Grid>  
        </Grid>
    )
}
// className={styles.SignInAndSignUp}
