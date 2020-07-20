import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SvgBeg from '../images/bag';
import SvgWishlistSec from '../images/wishlistThird';

class Header extends Component {

    render() {

        var count = this.props.cart

        if (count.length > 0) {
            count = this.props.cart.length
        }

        return (
            <header className="navbar">
                <div className="logo">
                    <NavLink activeClassName="active" exact to="/"> clothes &amp; brands</NavLink>
                </div>

                <div className="nav-bar">

                    <NavLink className="wishlist-link" activeClassName="active" exact to="/wishlist">
                        <div className="svg-image-continer">
                            <SvgWishlistSec className="svg"> </SvgWishlistSec>
                        </div>
                    </NavLink>

                    <NavLink className="bag-link" activeClassName="active" exact to="/cart">
                        <div className="bag-image-continer">
                            <SvgBeg className="svg"> </SvgBeg>
                        </div>

                        <h3> {count} </h3>

                    </NavLink>

                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.products
    }
}


export default connect(mapStateToProps)(Header)

