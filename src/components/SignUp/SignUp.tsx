import React, { Component, FormEvent } from 'react'
import { CustomButton } from '../UI/CustomButton'
import { CustomInput } from '../UI/CustomInput'
import styles from './SignUp.module.scss'
import { auth } from '../../firebase'
import { createUserProfileDocument } from '../../api';
interface SignUpState {
    displayName?: string
    email?: string | number
    password?: string | number
    confirmPassword?: string | number,
}

export class SignUp extends Component<SignUpState> {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword) {
            alert('password don`t match')
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
        } catch (error) {
            console.error(error)
        }
        
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className={styles.SignUp}>
                <h2>I do not have an account</h2>
                <span>Sign up witch your email and password</span>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <CustomInput 
                        type="text" 
                        name="displayName" 
                        value={displayName} 
                        required
                        handleChange={this.handleChange}
                        label='displayName'           
                    />
                    <CustomInput 
                        type="email" 
                        name="email" 
                        value={email} 
                        required
                        handleChange={this.handleChange}
                        label='Email'           
                    />
                    <CustomInput
                        type="password" 
                        name="password" 
                        value={password} 
                        required
                        handleChange={this.handleChange}
                        label='Password'  
                    />
                    <CustomInput 
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        required
                        handleChange={this.handleChange}
                        label='Confirm Password'           
                    />
                    <div className={styles.btnGroup}>
                        <CustomButton type='black'>SIGN UP</CustomButton>
                    </div> 
                </form>
            </div>
        )
    }
}

