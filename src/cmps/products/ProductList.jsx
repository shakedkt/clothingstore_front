import React from 'react';
import ProductPreview from './ProductPreview';

export default (props) => {
    
return(
    <div className="products-list">
        {props.products.map((product) => (   
            <ProductPreview product={product} key={Math.random()}></ProductPreview>
        ))}
    </div>
)
}

