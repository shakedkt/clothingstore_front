import { ProductService } from '../services/product.service'

export function loadProducts(filterBy) {
    return async dispatch => {
        const products = await ProductService.getProducts(filterBy)
        dispatch({ type: 'SET_PRODUCTS', products })
    }
}

export function loadProductById(id) {
    return async dispatch => {
        const product = await ProductService.getProductById(id)
        dispatch({ type: 'SET_PRODUCT', product })
    }
}

export function resetProduct() {
    return async dispatch => {
        dispatch({ type: 'RESEST_PRODUCT'})
    }
}
