import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCart } from '../../actions/cartActions'
import addBtn from '../../images/plus.png'
import { connect } from 'react-redux';

class ProductPreview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rotation: 0
        }
        this.rotate = this.rotate.bind(this);
    }

    rotate(){
        let newRotation = this.state.rotation + 45;
        if(newRotation >= 360){
          newRotation =- 360;
        }
        this.setState({
          rotation: newRotation,
        })
      }

    updateCart = () => {
        this.props.updateCart(this.props.product)
    }

    whenClick = () => {
        this.rotate()
        this.updateCart()
    }


    render() {
        const thisProduct = this.props.product
        const { rotation } =  this.state;

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
                        <img onClick={this.whenClick}
                        style={{transform: `rotate(${rotation}deg)`}}
                            className='rotate'
                            src={addBtn}
                            alt="" />
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

