import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCart } from '../../actions/cartActions'
import addBtn from '../../images/plus.png'
import { connect } from 'react-redux';

class ProductPreview extends Component {

    updateCart = () => {
        this.props.updateCart(this.props.product)
    }

    render() {
        const thisProduct = this.props.product
        return (
            <div className="ProductPreview" key={thisProduct._id}>
                <Link to={'/products/' + thisProduct._id}>

                    <div className="image-wrapper">
                        <img src={thisProduct.image.link} alt="" />
                    </div>
                </Link>
                <div className="prev-details-section">
                    <div>
                    <h2>{thisProduct.articleType}</h2>

                    <h3> {thisProduct.productDisplayName}</h3>
                    <h4>&#36;{thisProduct.price}</h4>
                    </div>
                    <div className="image-btn">
                        <img onClick={this.updateCart} src={addBtn} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

const mapDispatchToProps = {
    updateCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPreview)

