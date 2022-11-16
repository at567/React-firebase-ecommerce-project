import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const  StripeCheckoutButton = ({ price }) => {
const priceForStripe = price * 100
const publishableKey = 'pk_test_51InabBSGpOjmGD1kvFv1GxSdgbQGktyMpHItGbKKvTpYyW6sixRWchcH0RYuITtMzEvG28yMF0cT2rjwg53U9vNY006XvXW4X6'
const onToken = token => {
console.log(token);
alert('Alert Successful');    
}

return (
   <StripeCheckout
   label='Pay Now'
   name="Making Big Co .Ltd"
   shippingAddress
   billingAddress
   image="https://stripe.com/img/documentation/checkout/marketplace.png"
   description={`Your Total Price IS ${price}`}
   amount={priceForStripe} // cents
   token={onToken}
   panelLabel="Pay Now"
   stripeKey={publishableKey}
   /> 
)
}

export default StripeCheckoutButton;