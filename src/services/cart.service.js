import { StorageService } from './storage.service';

const KEY = 'cart';

function addToCart(product) {
    let cart = StorageService.load(KEY)
    console.log('product in addToCart', product);
    let newProduct = product.product
    console.log('meep');
    console.log('newProduct:', newProduct);
    
    if (!product.size) {
        newProduct.size = 36
    } else {
        newProduct.size = JSON.parse(product.size)
    }

    console.log('newProduct', newProduct);

    if (!cart) {
        StorageService.save(KEY, [newProduct])
        return (JSON.parse(JSON.stringify(newProduct)))
    }
    cart.unshift(newProduct)
    StorageService.save(KEY, newProduct)
    return JSON.parse(JSON.stringify(newProduct))
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