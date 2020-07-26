import axios from 'axios';

const​ ​BASE_URL​ = (​process​.​env​.​NODE_ENV​ !== ​'development'​) ? ​'/api/product'
: ​'//localhost:3000/api/product'​;

async function getProducts(filter) {
    
    const res = await axios.get(​BASE_URL​, {
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
    const res = await axios.get(​`${BASE_URL}​/${id}`, {
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