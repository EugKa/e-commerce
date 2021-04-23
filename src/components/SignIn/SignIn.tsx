import React, { FormEvent } from 'react'
import { CustomButton } from '../UI/CustomButton'
import { CustomInput } from '../UI/CustomInput'
import styles from './SignIn.module.scss'
import { Dispatch } from 'redux'
import { googleSignInStart, emailSignInStart, IEmailSignIn } from '../../store/auth'
import { connect } from 'react-redux'
interface ISignIn {
    email?: string | number
    password?: string | number
    googleSignInStart: () => void
    emailSignInStart: ({email, password}:IEmailSignIn) => void
}
class SignIn extends React.Component<ISignIn> {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { emailSignInStart } = this.props
        const { email, password } = this.state
        emailSignInStart({email, password})
    }

    handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }
    
    

    render() {
        const {googleSignInStart} = this.props
        return (
            <div className={styles.signin}>
                <h2>I already have an account</h2>
                <span>Sign in witch your email and password</span>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <CustomInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange}
                        label='Email'           
                    />
                    <CustomInput
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange}
                        label='Password'  
                    />
                    <div className={styles.btnGroup}>
                    <CustomButton type='black'>SIGN IN</CustomButton>
                    <CustomButton type='blue' onClick={googleSignInStart}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: ({email, password}:IEmailSignIn) => dispatch(emailSignInStart({email, password}))
})

const ConnectSignIn = connect(null, mapDispatchToProps)(SignIn)
export { ConnectSignIn as SignIn }

