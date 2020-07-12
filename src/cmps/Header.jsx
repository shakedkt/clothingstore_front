import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SvgCart from '../images/shoping-cart';

class Header extends Component {

    render() {

        var count = ''
        if (this.props.cart.length > 0) {
            count = this.props.cart.length
        }

        return (
            <header className="navbar">
                <div className="logo">
                    <NavLink activeClassName="active" exact to="/"> clothes &amp; brands</NavLink>
                </div>

                <NavLink className="cart-link" activeClassName="active" exact to="/cart">
                    <div className="cart-image-continer">
                        <SvgCart className="svg-cart"></SvgCart>
                    </div>

                    <h3> {count}</h3>

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


export default connect(mapStateToProps)(Header)

