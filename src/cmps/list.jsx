import React from 'react';
import ProductPreview from './products/ProductPreview';
import WishlistProduct from './wishlist/wishlist-product';
import BagProduct from './cart/bag-product';

export default (props) => {
    const components = {
        'ProductPreview': ProductPreview,
        'WishlistProduct': WishlistProduct,
        'BagProduct': BagProduct,
    };

    let TagName = components[props.tagName];

    return (
        <div className='products-list'>
            {props.products.map((product) => (
                <TagName className="list" product={product} key={Math.random()}> </TagName>
            ))}
        </div>
    )
}

