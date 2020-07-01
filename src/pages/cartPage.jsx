import React, { Component } from 'react';
import { connect } from 'react-redux';


class homepage extends Component {


    render() {
        return (
            <section className="home">
         here will be cart
            </section>
        );
    }
}

const mapStataeToProps = (state) => {
    return {
        products: state.product.products
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStataeToProps, mapDispatchToProps)(homepage)