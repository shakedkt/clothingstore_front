import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProductById } from '../actions/productActions';
import { resetProduct } from '../actions/productActions';
import { updateCart } from '../actions/cartActions';
import Select from 'react-select';
import SvgCart from '../images/shoping-cart';

// import BaseSelect from "react-select";
// import FixRequiredSelect from "../services/FixRequiredSelect";

const options = [
    { value: '36', label: 'Size 36' },
    { value: '36.5', label: 'Size 36.5' },
    { value: '37', label: 'Size 37' },
    { value: '37.5', label: 'Size 37.5' },
    { value: '38', label: 'Size 38' },
];

const Select = props => (
    <FixRequiredSelect
        {...props}
        SelectComponent={BaseSelect}
        options={props.options || options}
    />
);


class ProductPage extends Component {

    state = {
        selectedOption: null,
        isSelected: null,
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

    updateCart = (listName) => {

        if (this.state.isSelected === null) {
            this.setState({
                selectedOption: null,
                isSelected: false
            })
            return

        } else if (this.state.isSelected === true) {
            const alterdProduct = {
                size: this.state.selectedOption.value,
                product: this.props.product
            }
if (listName === cart) this.props.updateCart(alterdProduct)
else this.props.updateCart(alterdProduct)
        }

    }

    handleChange = selectedOption => {
        this.setState({
            selectedOption,
            isSelected: true
        });
    };

    render() {
        const { product } = this.props
        const selectedOption = this.state.selectedOption;
        const isSelected = this.state.isSelected


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
                    <div>
                        <p className="requierd"> {isSelected === null ? '' : 'size is requierd'} </p>
                       
                        <Select value={selectedOption}
                            onChange={this.handleChange} options={options} isSearchable required />
                    </div>
                    <div>
                        <button className="add-to-bag" onClick={this.updateCart}>Add to bag  <SvgCart className="svg-cart" color={'#ffffff'}></SvgCart> </button>
                        <button className="add-to-wishlist" onClick={this.updateWishlist}>Wishlist</button>
                    </div>
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

{/* <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        /> */}