import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProductById } from '../actions/productActions';
import { resetProduct } from '../actions/productActions';

class ProductPage extends Component {

    async componentDidMount() {
        console.log('ProductPage store',this.props.product);
        this.loadProduct()
    }

    loadProduct() {
        const id = this.props.match.params.id
        this.props.loadProductById(id)
    }

    async componentWillUnmount() {
        this.resetProduct()
    }

    resetProduct() {
        this.props.resetProduct()
    }

    render() {
        const { product } = this.props

        if (!product) {
            return <div> wait</div>;
        }

        return (
            <section className="product-page">
                <img src={product.image} alt="" />

                <div className="product-details">
                    name: {product.title}
                </div>

            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product.currProduct
    }
}

const mapDispatchToProps = {
    loadProductById,
    resetProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)