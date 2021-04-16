import React from 'react'
import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'
import styles from './SignInAndSignUp.module.scss'
export const SignInAndSignUp = () => {
    return (
        <div className={styles.SignInAndSignUp}>
            <SignIn/>
            <SignUp/>
        </div>
    )
}
