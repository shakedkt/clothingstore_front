const initalState = {
    products: [],
    tagName: 'WishlistProduct'
}

export default function WishlistReducer(state = initalState, action) {
    switch (action.type) {
        case 'SET_WISHLIST':
            return { ...state, products: action.products }

        case 'UPDATE_WISHLIST':
            return { ...state, products: [...state.products, action.updatedProducts] }

        case 'REMOVE_WISHLIST':
            return {
                state, products: state.products.filter(product => {
                    return product.id !== action.productId
                })
            }
        default:
            return state;
    }


}