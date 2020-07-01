import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import shopingCart from '../images/shopping-cart.png';
import { connect } from 'react-redux';
import { updateCart } from '../actions/cartActions';

export default class Header extends Component {

    render() {

        return (
            <header className="navbar">
                <div className="logo">
                    <NavLink activeClassName="active" exact to="/"> clothes&amp;brands</NavLink>
                </div>

                <NavLink className="cart-link" activeClassName="active" exact to="/cart">
                    <div className="cart-image-continer">
                        <img src={shopingCart} />
                    </div>

                    <h3>`(${this.prop.cart.length})`</h3>
                      </NavLink>

            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

const mapDispatchToProps = {
    updateCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

