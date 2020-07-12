import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import ProductReducer from './reducers/ProductReducer';
import CartReducer from './reducers/CartReducer';
import WishlistReducer from './reducers/WishlistRecuder';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer,
  Wishlist: WishlistReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store