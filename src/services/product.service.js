import axios from 'axios';

async function getProducts(filter) {
    
    const res = await axios.get(process.env.REACT_APP_BACKEND_URL + 'api/product/', {
        params: {
            filter: filter
        },
        proxy: {
            port: 3000,
            host: process.env.REACT_APP_BACKEND_URL
        }

    })    
    return res.data.products
}

async function getProductById(id) {
    const res = await axios.get(process.env.REACT_APP_BACKEND_URL + `api/product/${id}`, {
        proxy: {
            port: 3000,
            host: process.env.REACT_APP_BACKEND_URL
        }
    })
    return res.data.product
}

export const ProductService = {
    getProducts,
    getProductById
}