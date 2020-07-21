import { StorageService } from './storage.service';

const KEY = 'cart';

function addToCart(product) {
    let cart = StorageService.load(KEY)
    console.log('product in addToCart', product);

    if (!product.size) {
        product.size = 36
    } else {
        product.size = JSON.parse(product.size)
    }

    if (!cart) {
        StorageService.save(KEY, [product])
        return (JSON.parse(JSON.stringify(product)))
    }
    cart.unshift(product)
    StorageService.save(KEY, cart)
    return JSON.parse(JSON.stringify(product))
}

function removeFromCart(productId) {
    let cart = StorageService.load(KEY)
    let newCart = cart.filter(cartItem => {
        return productId !== cartItem.id
    })
    newCart = JSON.parse(JSON.stringify(newCart));
    StorageService.save(KEY, newCart)
}

function changeProductSize(product) {


    // let cart = StorageService.load(KEY)
    // let newCart = cart.filter(cartItem => {
    //      return productId !== cartItem.id
    //  })
    //  newCart = JSON.parse(JSON.stringify(newCart));
    //  StorageService.save(KEY, newCart)
}

function loadCart() {
    let cart = StorageService.load(KEY)
    if (!cart) {
        StorageService.save(KEY, [])
        cart = []
    }

    return cart
}

export const CartService = {
    addToCart,
    loadCart,
    removeFromCart,
    changeProductSize
}