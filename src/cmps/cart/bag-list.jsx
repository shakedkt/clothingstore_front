import React from 'react';
import BagProduct from './bag-product';

export default (props) => {

return(
    <div className="bag-list">
        {props.cart.map((product) => (   
            <BagProduct product={product} key={Math.random()}></BagProduct>
        ))}
    </div>
)
}

