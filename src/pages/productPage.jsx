import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProductById } from '../actions/productActions';
import { resetProduct } from '../actions/productActions';
import { updateCart } from '../actions/cartActions';
import Select from 'react-select';
import SvgCart from '../images/shoping-cart';


const options = [
    { value: '36', label: 'Size 36' },
    { value: '36.5', label: 'Size 36.5' },
    { value: '37', label: 'Size 37' },
    { value: '37.5', label: 'Size 37.5' },
    { value: '38', label: 'Size 38' },
];


class ProductPage extends Component {

    state = {
        selectedOption: null,
    };

    async componentDidMount() {
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

    updateCart = () => {
        const alterdProduct = {
            size: this.state.selectedOption.value,
            product: this.props.product
        }
        this.props.add(alterdProduct)
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };

    render() {
        const { product } = this.props
        const { selectedOption } = this.state;

        if (!product) {
            return <div> wait</div>;
        }

        return (
            <section className="product-page">
                <img src={product.image.link} alt="" />

                <div className="product-details">
                    <div>
                    <h2>{product.productDisplayName} </h2>
                    <h3 className="product-price">&#36;{product.price} <span>(Import fees not included)</span></h3>
                    </div>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                    <button className="add-to-bag" onClick={this.updateCart}>Add to bag  <SvgCart className="svg-cart" color={'#ffffff'}></SvgCart> </button>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product.currProduct,
    }
}

const mapDispatchToProps = {
    loadProductById,
    resetProduct,
    updateCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)