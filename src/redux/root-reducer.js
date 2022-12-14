import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import shopReducer from './shop/shop.reducer';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  }

const rootReducer = combineReducers({
cart:cartReducer,
user:userReducer,
directory:directoryReducer, 
shop:shopReducer
}); 



export default  persistReducer(persistConfig, rootReducer)