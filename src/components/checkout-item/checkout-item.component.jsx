import React from 'react';
import { connect } from 'react-redux';
import './check-out.styles.scss';
import { claerItemFromCart } from '../../redux/cart/cart.actions';
import { increseQuentityItem } from '../../redux/cart/cart.actions';
import { decreseQuentityItem } from '../../redux/cart/cart.actions';
const  CheckoutItem = ({ cartItem , claerItemFromCart , increseQuentityItem , decreseQuentityItem}) => {
const {  name, imageUrl, price, quantity } = cartItem;
return (
<div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
        <div className='arrow' onClick={ () => decreseQuentityItem(cartItem) }  >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={ () => increseQuentityItem(cartItem) } >
          &#10095;
        </div>
      </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={ () => claerItemFromCart(cartItem) }  >&#10005;</div>
  </div>
);
};
const mapDispatchToProps = dispatch => ({
  claerItemFromCart:item => dispatch(claerItemFromCart(item)),
  increseQuentityItem:item => dispatch(increseQuentityItem(item)),
  decreseQuentityItem:item => dispatch(decreseQuentityItem(item))
});


export default connect(null,mapDispatchToProps)(CheckoutItem);