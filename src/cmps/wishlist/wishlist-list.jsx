import React from 'react';
import WishlistProduct from './wishlist-product';

export default (props) => {

    return (
        <div className="bag-list">
            {props.cart.map((product) => (
                <WishlistProduct product={product} key={Math.random()}></WishlistProduct>
            ))}
        </div>
    )
}

