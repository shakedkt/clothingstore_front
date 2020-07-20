const initalState = {
    products: [],
    tagName: 'BagProduct'
}

export default function CartReducer(state = initalState, action) {
    switch (action.type) {
        case 'SET_CART':
            return { ...state, products: action.products }

        case 'UPDATE_CART':
            return { ...state, products: [...state.products, action.updatedProducts] }

        case 'REMOVE_CART':
            return {
                state, products: state.products.filter(product => {
                    return product.id !== action.productId
                })
            }
        default:
            return state;
    }


}