import React, { Component } from "react";
import Flag from "../../images/uk-flag.png";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cartActions";
import crossImage from "../../images/cross.png";
import Icon from "../../images/spiner";

class WishlistProduct extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      size: 36,
      quantity: 1,
      flag: false,
    };
  }

  handleChange = (ev) => {
    this.setState({ size: ev.target.value });
  };

  deleteSize = () => {
    this.setState({ size: null });
  };

  changeQuantity = (ev) => {
    this.setState({ quantity: ev.target.value });
    this.changeFlag();
  };

  changeFlag = () => {
    const oppositeFlag = !this.state.flag;

    this.setState({ flag: oppositeFlag });
  };

  deleteFromCart = (productId) => {
    this.props.removeFromCart(productId);
  };

  render() {
    const size = this.state.size;
    const product = this.props.product.product;
    const quantity = this.state.quantity;
    let flag = this.state.flag;

    if (!product) {
      return <div> <Icon className="spinner"></Icon> </div>;
    }

    console.log("product:", product);

    return (
      <section className="bag">
        <div className="bag-header">
          <div className="shipping-from">
            <img src={Flag} alt="" />
            <h4>
              Shipping from{" "}
              <span className="country-name"> United Kingdom </span>{" "}
            </h4>
          </div>
          <div>
            <div className="shipping-fee"> No shipping fee </div>
            Import duties are included.
          </div>
        </div>

        <div className="bag-body">
          <img className="prod-img" src={product.image.link} alt="" />
          <div className="product-cart-desc">
            <div>
              <h3>{product.subCategory}</h3>
              <h4>{product.productDisplayName}</h4>
            </div>

            <div>
              <h3>&#36;{product.price}</h3>
            </div>

            <div className="quant-and-size">
              <div className="size">
                {!size ? (
                  <form>
                    <label>
                      Size:
                      <select
                        value={this.state.size}
                        onChange={this.handleChange}
                      >
                        <option value="36">36</option>
                        <option value="36.5">36.5</option>
                        <option value="37">37</option>
                        <option value="37.5">37.5</option>
                        <option value="38">38</option>
                      </select>
                    </label>
                  </form>
                ) : (
                    <div>
                      <h3>size: {size}</h3>
                      <button onClick={this.deleteSize}>Change </button>
                    </div>
                  )}
              </div>

              <div>
                {flag ? (
                  <form>
                    <label>
                      Quantity:
                      <select
                        value={this.state.quantity}
                        onChange={this.changeQuantity}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </label>
                  </form>
                ) : (
                    <div className="quantity">
                      <h3>Quantity: {quantity}</h3>
                      <button onClick={this.changeFlag}>Change </button>
                    </div>
                  )}
              </div>
            </div>
          </div>
          <img
            src={crossImage}
            alt=""
            className="delete-product"
            onClick={() => this.deleteFromCart(product.id)}
          ></img>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.products,
  };
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistProduct);
