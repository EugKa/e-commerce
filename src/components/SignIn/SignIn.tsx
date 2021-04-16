import React, { FormEvent } from 'react'
import { signInWithGoogle } from '../../firebase'
import { CustomButton } from '../UI/CustomButton'
import { CustomInput } from '../UI/CustomInput'
import styles from './SignIn.module.scss'
import { auth } from '../../firebase'
interface ISignIn {
    email?: string | number
    password?: string | number
}
export class SignIn extends React.Component<ISignIn> {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (error) {
            console.error(error);
            
        }
        
    }

    handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }
    
    

    render() {
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
                    <CustomButton type='blue' onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

