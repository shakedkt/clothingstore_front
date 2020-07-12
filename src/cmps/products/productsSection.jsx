import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import { loadProducts } from '../../actions/productActions';

class productsSection extends Component {

   async componentDidUpdate(prevProps) {
        if (prevProps.section !== this.props.section) {
            this.loadProducts();
        }
    }

    async componentDidMount() {
        this.loadProducts();
    }

    loadProducts = () => {        
        this.props.loadProducts(this.props.section)
    }

    render() {
        return (
            <div>
                <div className="products">
                    <ProductList products={this.props.products}></ProductList>
                </div>
            </div>
        )
    }
}

const mapStataeToProps = (state) => {
    return {
        products: state.product.products,
    }
}

const mapDispatchToProps = {
    loadProducts,
}

export default connect(mapStataeToProps, mapDispatchToProps)(productsSection)


