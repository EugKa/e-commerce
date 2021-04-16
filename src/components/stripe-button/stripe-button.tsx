import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const {REACT_APP_STRIPE_APY_KEY} = process.env;
interface StripeCheckoutButtonProps {
    price: number
}
export const StripeCheckoutButton = ({price}:StripeCheckoutButtonProps) => {
    const priceForStripe = price * 100
    
    const onToken = (token:any) => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        
        <StripeCheckout 
            label='Pay Now'
            name='e-commerce-app'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={`${REACT_APP_STRIPE_APY_KEY}`}
         />
    )
}
