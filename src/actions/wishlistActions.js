import { WishlistService } from '../services/wishlist.service'

export function loadWislist() {    
    return async dispatch => {
        const cart = await WishlistService.loadWishlist()
        dispatch({ type: 'SET_CART', cart })
    }
}


export function updateWishlist(product) {    
    return async dispatch => {
        const updatedProduct = await WishlistService.addToWishlst(product)
        dispatch({ type: 'UPDATE_CART', updatedProduct })
    }
}

export function removeFromWishlist(productId) {
    return async dispatch => {
        await WishlistService.removeFromWishlist(productId)
        dispatch({ type: 'REMOVE_CART', productId })
    }
}

