import React from 'react';

export default (product) => {

    const thisProduct = product.product

    return (
        <div className="ProductPreview" key={thisProduct._id}>

            <div className="image-wrapper">
                <img src={thisProduct.image[0]} alt="" />
            </div>

            <h3> {thisProduct.title}</h3>
            <h4>{thisProduct.brand}</h4>
            <h4>&#36;{thisProduct.price}</h4>

        </div>
    )
}