import React, { Component, FormEvent } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { CustomButton } from '../UI/CustomButton'
import { CustomInput } from '../UI/CustomInput'
import { signUpStart } from "../../store/auth";
import styles from './SignUp.module.scss'
interface SignUpState {
    displayName?: string
    email?: string | number
    password?: string | number
    confirmPassword?: string | number,
}

interface SignUpProps {
    signUpStart: (userCredentials:any) => void 
}

class SignUp extends Component<SignUpProps,SignUpState> {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { signUpStart } = this.props
        const { displayName, email ,password, confirmPassword} = this.state

        if(password !== confirmPassword) {
            alert('password don`t match')
            return
        }
        signUpStart({displayName, email ,password})
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

// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signUpStart: (userCredentials:any) => dispatch(signUpStart(userCredentials))
})

const ConnectSignUp = connect(null, mapDispatchToProps)(SignUp)

export { ConnectSignUp as SignUp }


