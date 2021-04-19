import React, { Component } from 'react'
import { StripeForm } from "../stripe-form";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import styles from './Payment.module.scss'

const {REACT_APP_STRIPE_APY_KEY} = process.env;

const stripePromise = loadStripe(`${REACT_APP_STRIPE_APY_KEY}`);

export class Payment extends Component {
    render() {
        return (
            <div className={styles.Payment}>
                <div className={styles.title}>
                    <h2>
                        TEST MODE
                    </h2>
                    <h3>
                        *Please use the following test credit card for payments*
                    </h3>
                    <h3>4242 4242 4242 4242 - Epx: 01/22 - CVC: 123</h3>
                </div>
                
                <Elements stripe={stripePromise}>
                    <StripeForm />
                </Elements>
                
            </div>
            
        )
    }
}
