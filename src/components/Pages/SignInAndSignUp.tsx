import { Grid } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { AppState } from '../../store'
import { selectCurrentUser } from '../../store/auth'
import { ICurrentUser } from '../../types/CurrentUser'
import { ROUTES_URLS } from '../App/routes'
import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'
interface SignInAndSignUpProps {
    currentUser:ICurrentUser
}
const SignInAndSignUp = ({currentUser}:SignInAndSignUpProps) => {
    return (
        currentUser ? 
        <Redirect to={ROUTES_URLS.HOME}/> 
        : 
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

const mapStateToProps = (state:AppState) => ({
    currentUser: selectCurrentUser(state)
})
const ConnectSignInAndSignUp = connect(mapStateToProps)(SignInAndSignUp)

export { ConnectSignInAndSignUp as SignInAndSignUp}