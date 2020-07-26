import React, { Component } from 'react';
import { connect } from 'react-redux';
import SHOP from '../images/emptybag.jpg';
import { loadCart } from '../actions/cartActions';
import List from '../cmps/list';
import Icon from '../images/spiner'

class CartPage extends Component {

   async componentDidMount() {
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
        console.log('this.props.cart', this.props.cart);
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

        if (!this.props.cart) {
            return <div> <Icon className="spinner"></Icon> </div>;
          }

        return (
            <section className="cart-page">
                <div className="header">
                    <h2>Shopping bag</h2>
                </div>

                <div className="products">
                    <List products={this.props.cart} tagName={'BagProduct'}> </List>
                </div>

            </section>
        );
    }
}

const mapStataeToProps = (state) => {
    return {
        cart: state.cart.products
    }
}

const mapDispatchToProps = {
    loadCart
}

export default connect(mapStataeToProps, mapDispatchToProps)(CartPage)