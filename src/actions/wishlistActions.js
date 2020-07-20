import { WishlistService } from '../services/wishlist.service'

export function loadWishlist() {    
    return async dispatch => {
        const products = await WishlistService.loadWishlist()
        dispatch({ type: 'SET_WISHLIST', products })
    }
}

export function updateWishlist(product) {    
    return async dispatch => {
        const updatedProduct = await WishlistService.addToWishlist(product)
        dispatch({ type: 'UPDATE_WISHLIST', updatedProduct })
    }
}

export function removeFromWishlist(productId) {
    return async dispatch => {
        await WishlistService.removeFromWishlist(productId)
        dispatch({ type: 'REMOVE_WISHLIST', productId })
    }
}

