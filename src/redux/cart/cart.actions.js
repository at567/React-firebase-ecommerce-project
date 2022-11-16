import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
type: CartActionTypes.ADD_ITEM,
payload:item
});

export const claerItemFromCart = item => ({
type: CartActionTypes.CLEAR_ITEM_FROM_CART,
payload:item,
});

export const increseQuentityItem = item => ({
type:CartActionTypes.INCRESE_ITEM_QUANTITY,
payload:item
});

export const decreseQuentityItem = item => ({
type:CartActionTypes.DECRESE_ITEM_QUANTITY,
payload:item
});

export const clearCart = () => ({
type:CartActionTypes.CLEAR_CART
});