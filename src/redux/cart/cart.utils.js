export const addItemToCart = (cartItems, cartItemToAdd) => {
const existingCartItem = cartItems.find(
cartItem => cartItem.id === cartItemToAdd.id
); 
 
 if(existingCartItem) {
     return cartItems.map(cartItem =>
     cartItem.id ===  cartItemToAdd.id   
     ? { ...cartItem , quantity:cartItem.quantity + 1 }  
     : cartItem 
    )
 }
 return [ ...cartItems, { ...cartItemToAdd,quantity:1 }];

} 


export const deleteQuentityItemToCart = (cartItems, cartItemToDel) => {
  const existingCartItem = cartItems.find(
  cartItem => cartItem.id === cartItemToDel.id
  ); 
    
  if(existingCartItem.quantity === 1) {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== cartItemToDel.id);
    return updatedCartItems;
  }

   if(existingCartItem) {
       return cartItems.map(cartItem =>
       cartItem.id ===  cartItemToDel.id   
       ? { ...cartItem , quantity:cartItem.quantity - 1 }  
       : cartItem 
      )
   }
   return [ ...cartItems, { ...cartItemToDel,quantity:1 }];
  
  } 


export const cartItemFromCart = (cartItems,cartItemToRemove ) => {
 const updatedCartItemss = cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  return updatedCartItemss;
} 

