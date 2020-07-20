import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ProductList from './ProductList';
import { loadProducts } from '../../actions/productActions';
import List from '../list';

class productsSection extends Component {

    async componentWillMount() {
        this.loadProducts();
    }

    loadProducts = () => {
        this.props.loadProducts(this.props.section)
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.section !== this.props.section) {
            this.loadProducts();
        }
    }
    
    render() {
            return (
                <div>
                    <div className="products">
                        {/* <ProductList products={this.props.products}></ProductList> */}
                        <List products={this.props.products} tagName={'ProductPreview'}> </List>
                    </div>
                </div>
            )
    } 
        
}

const mapStataeToProps = (state) => {
    return {
        products: state.product.products
    }
}

const mapDispatchToProps = {
    loadProducts,
}

export default connect(mapStataeToProps, mapDispatchToProps)(productsSection)


