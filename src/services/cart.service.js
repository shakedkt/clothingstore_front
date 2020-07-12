import { StorageService } from './storage.service';

const KEY = 'cart';


function addToCart(product) {
    let cart = StorageService.load(KEY)
    if (!cart) {
        StorageService.save(KEY, [product])
        return product
    }
    console.log(cart);
    cart.unshift(product)
    StorageService.save(KEY, cart)
    return cart
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
console.log(product);


    // let cart = StorageService.load(KEY)
    // let newCart = cart.filter(cartItem => {
    //      return productId !== cartItem.id
    //  })
    //  newCart = JSON.parse(JSON.stringify(newCart));
    //  StorageService.save(KEY, newCart)
}

function loadCart() {
    let cart = StorageService.load(KEY)
    return cart
}

export const CartService = {
    addToCart,
    loadCart,
    removeFromCart,
    changeProductSize
}