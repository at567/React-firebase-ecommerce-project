import  CartActionTypes  from './cart.types';
import { addItemToCart } from './cart.utils';
import {cartItemFromCart} from './cart.utils';
import {deleteQuentityItemToCart} from './cart.utils';

const INITIAL_STATE = {
hidden:true,
cartItems: [],
};

const cartReducer = (state = INITIAL_STATE , action) => {

    switch (action.type) {
     case CartActionTypes.TOGGLE_CART_HIDDEN:
     return {
       ...state,
       hidden:!state.hidden  
     } 
     case  CartActionTypes.ADD_ITEM:
     return { 
     ...state, 
     cartItems:addItemToCart(state.cartItems,action.payload) 
     }
     case  CartActionTypes.CLEAR_ITEM_FROM_CART:
      return { 
      ...state, 
      cartItems:cartItemFromCart(state.cartItems,action.payload) 
      }
      case  CartActionTypes.INCRESE_ITEM_QUANTITY:
       return { 
       ...state, 
       cartItems:addItemToCart(state.cartItems,action.payload) 
       }
       case  CartActionTypes.DECRESE_ITEM_QUANTITY:
       return { 
       ...state, 
       cartItems:deleteQuentityItemToCart(state.cartItems,action.payload) 
       }
       case  CartActionTypes.CLEAR_CART:
        return {
        ...state,
        cartItems:[]
        }; 
    default:
        return  state;
    }


};
export default cartReducer;

 