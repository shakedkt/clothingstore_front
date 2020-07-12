const initalState = {
    wishlist: []
}

export default function WishlistReducer(state = initalState, action) {
    switch (action.type) {
        case 'SET_WISHLIST':
            return { ...state, wishlist: action.wishlist }

        case 'UPDATE_WISHLIST':
            return { ...state, wishlist: [...state.wishlist, action.product] }

        case 'REMOVE_WISHLIST':
            return {
                state, wishlist: state.wishlist.filter(product => {
                    return product.id !== action.productId
                })
            }
        default:
            return state;
    }


}