export function updateCart(product) {
    return async dispatch => {
        dispatch({ type: 'UPDATE_CART', product })
    }
}