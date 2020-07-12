import { CartService } from '../services/cart.service'


export function loadCart() {    
    return async dispatch => {
        const cart = await CartService.loadCart()
        dispatch({ type: 'SET_CART', cart })
    }
}


export function updateCart(product) {    
    return async dispatch => {
        const updatedProduct = await CartService.addToCart(product)
        dispatch({ type: 'UPDATE_CART', updatedProduct })
    }
}

export function removeFromCart(productId) {
    return async dispatch => {
        await CartService.removeFromCart(productId)
        dispatch({ type: 'REMOVE_CART', productId })
    }
}

