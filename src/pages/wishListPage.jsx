import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadWishlist } from '../actions/wishlistActions';
import List from '../cmps/list';
import SvgEmptyWishlist from '../images/emptyWishlist';

class WishlistPage extends Component {

    async componentWillMount() {
        await this.loadWishlistFromStorage()
    }

    loadWishlistFromStorage() {
        this.props.loadWishlist()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.wishlist.length !== this.props.wishlist.length) {
            this.loadWishlistFromStorage()
        }
    }

    render() {
        
        if (this.props.wishlist.length === 0) {

            return (
                <section className="empty-bag">
                    <div className="header">
                        <h2>Wishlist Empty</h2>
                    </div>
                    <SvgEmptyWishlist className="wishlist-svg"></SvgEmptyWishlist>
                </section>
            )
        } 

        return (
            <section className="cart-page">
                <div className="header">
                    <h2>Wishlist bag</h2>
                </div>

                <div className="products">
                    <List products={this.props.wishlist} tagName={'WishlistProduct'}> </List>
                </div>

            </section>
        );
    }
}

const mapStataeToProps = (state) => {
    return {
        wishlist: state.wishlist.products
    }
}

const mapDispatchToProps = {
    loadWishlist
}

export default connect(mapStataeToProps, mapDispatchToProps)(WishlistPage)