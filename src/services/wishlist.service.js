import { StorageService } from './storage.service';

const KEY = 'wishlist';


function addToWishlist(product) {
    let wishlist = StorageService.load(KEY)

    if (!product.size) {
        product.size = 36
    } else {
        product.product.size = JSON.parse(product.size)
    }

    if (!wishlist) {
        StorageService.save(KEY, [product.product || product])
        return (JSON.parse(JSON.stringify(product.product || product)))
    }

    wishlist.unshift(product.product || product)
    StorageService.save(KEY, wishlist)
    return JSON.parse(JSON.stringify(product.product || product))
}

function removeFromWishlist(productId) {
    let wishlist = StorageService.load(KEY)
   let newWishlist = wishlist.filter(wishlistItem => {
        return productId !== wishlistItem.id
    })
    newWishlist = JSON.parse(JSON.stringify(newWishlist));
    StorageService.save(KEY, newWishlist)
}

function changeProductSize(product) {


    // let cart = StorageService.load(KEY)
    // let newCart = cart.filter(cartItem => {
    //      return productId !== cartItem.id
    //  })
    //  newCart = JSON.parse(JSON.stringify(newCart));
    //  StorageService.save(KEY, newCart)
}

function loadWishlist() {
    let wishlist = StorageService.load(KEY)
    if (!wishlist) {
        StorageService.save(KEY, [])
        wishlist = []
    }
    return wishlist
}

export const WishlistService = {
    addToWishlist,
    loadWishlist,
    removeFromWishlist,
    changeProductSize
}