import React, { Component } from 'react';
import { connect } from 'react-redux';
import BagList from '../cmps/cart/bag-list';
import SHOP from '../images/emptybag.jpg';
import { loadCart } from '../actions/cartActions';

class CartPage extends Component {
    // constructor(props, context) {
    //     super(props, context);
    // }

    async componentWillMount() {
        await this.loadCartFromStorage()
    }

    loadCartFromStorage() {
        this.props.loadCart()
    }

    componentDidUpdate(prevProps) {   
        if (prevProps.cart.length !== this.props.cart.length) {
            this.loadCartFromStorage()
        }
    }

    render() {
        if (this.props.cart.length === 0) {
            return (
                <section className="empty-bag">
                    <div className="header">
                        <h2>Shopping bag Empty</h2>
                    </div>
                    <img className="shop-img" src={SHOP} alt="" />
                </section>
            )
        }

        return (
            <section className="cart-page">
                <div className="header">
                    <h2>Shopping bag</h2>
                </div>

                <div className="products">
                    <BagList cart={this.props.cart}></BagList>
                </div>

            </section>
        );
    }
}

const mapStataeToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

const mapDispatchToProps = {
    loadCart
}

export default connect(mapStataeToProps, mapDispatchToProps)(CartPage)