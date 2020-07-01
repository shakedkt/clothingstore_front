const initalState = {
    cart: []
}


export default function CartReducer(state = initalState, action) {
    switch (action.type) {
        case 'SET_CART':
            return { ...state, cart: action.cart }

        case 'UPDATE_CART':
            return { ...state, cart: action.cart }

        default:
            return state;
    }
}