import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProductById } from '../actions/productActions';
import { resetProduct } from '../actions/productActions';
import { updateCart } from '../actions/cartActions';
import Select from 'react-select';
import SvgCart from '../images/shoping-cart';
import SvgStar from '../images/star';
import { updateWishlist } from '../actions/wishlistActions';

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
            if (listName === 'cart') {
                this.props.updateCart(alterdProduct)
                return
            }
            else this.props.updateWishlist(alterdProduct)
        }
    }

    handleChange = selectedOption => {
        this.setState({
            selectedOption,
            isSelected: true
        });
    };

    getRandomNum = () => {
        let dates = []

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];

        let num1 = new Date()
        const getMonth = monthNames[num1.getMonth() + 1]
        num1 = num1.getDate()

        const num2 = (min, max) => {
            return Math.floor(Math.random() * (max - min + 3) + min);
        }

        dates.push(getMonth + num1)
        dates.push(getMonth + num2(num1, 30))

        return dates
    }

    render() {
        const { product } = this.props
        const selectedOption = this.state.selectedOption;
        const isSelected = this.state.isSelected
        var [firstDate, secondDate] = this.getRandomNum()

        if (!product) {
            return <div> wait</div>;
        }

        return (
            <section className="product-page">

                <div className="image-container">
                    <img src={product.image.link} alt="" />
                </div>

                <div className="product-details">
                    <div>
                        <h2 className="product-header">{product.productDisplayName} </h2>
                        <h3 className="product-price">&#36;{product.price} <span>(Import fees not included)</span></h3>
                    </div>

                    <div className="product-desc">
                        <div>
                            <h4> type: </h4>
                            <h4>color: </h4>
                            <h4>year collection: </h4>
                        </div>
                        <div>
                            <p> {product.articleType} </p>
                            <p> {product.baseColour} </p>
                            <p> {product.year}</p>
                        </div>
                    </div>

                    <div className="reactive-section">
                        <p className="Requierd"> {isSelected === null || isSelected === true ? '' : 'size is requierd'} </p>
                        <Select
                            className="select-cmp"
                            placeholder={'Select Size...'}
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        />

                        <div className="buttons">
                            <button className="add-to" onClick={() => this.updateCart('cart')}>Add to bag  <SvgCart className="svg-icon" color={'#ffffff'}></SvgCart> </button>
                            <button className="add-to wishlist" onClick={() => this.updateCart('')}>Wishlist <SvgStar className="svg-icon star" color={'#B8B8B8'}></SvgStar></button>
                        </div>
                        <div className="delivery-time">
                            <h4>Estimated Delivery</h4>
                            <p>{firstDate} - {secondDate}</p>
                        </div>
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
    updateWishlist
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)