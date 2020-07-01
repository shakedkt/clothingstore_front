import axios from 'axios';

async function getProducts(filter) {

    const res = await axios.get('http://localhost:3000/api/product/', {
        params: {
            filter: filter
        },
        proxy: {
            port: 3000,
            host: 'http://localhost:3000'
        }

    })
    return res.data.products
}

async function getProductById(id) {
    const res = await axios.get(`http://localhost:3000/api/product/${id}`, {
        proxy: {
            port: 3000,
            host: 'http://localhost:3000'
        }
    })
    return res.data.product
}

export const ProductService = {
    getProducts,
    getProductById
}