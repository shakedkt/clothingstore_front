const initalState = {
    products: [],
    currProduct: null,
    tagName: 'ProductPreview' 
}

export default function ProductReducer(state = initalState, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.products }

        case 'SET_PRODUCT':
            return { ...state, currProduct: action.product }

        case 'RESEST_PRODUCT':
            return { ...state, currProduct: null }

        default:
            return state;
    }
}