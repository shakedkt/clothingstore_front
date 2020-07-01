import React from 'react';
import {Link} from 'react-router-dom';
import ProductPreview from './ProductPreview';

export default (props) => {
return(
    <div className="products-list">
        {props.products.map((product) => (
            <Link to={'/products/' + product._id} key={Math.random()}>
            <ProductPreview product={product}></ProductPreview>
            </Link>
        ))}
    </div>
)
}