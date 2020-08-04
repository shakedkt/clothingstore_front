import React, { Component } from "react";
import { connect } from "react-redux";
import { loadProducts } from "../../actions/productActions";
import List from "../list";
import Icon from "../images/spiner";

class productsSection extends Component {
  async componentDidMount() {
    this.loadProducts();
  }

  loadProducts() {
    this.props.loadProducts(this.props.section);
  }

  async componentDidUpdate(prevProps) {

    if (this.props.section) {
      if (prevProps.section !== this.props.section) {
        this.loadProducts();
      }
    }
  }

  render() {

    if (!this.props.products) {
      return <div> <Icon className="spinner"></Icon> </div>;
    }

    return (
      <div>
        <div className="products">
          <List products={this.props.products} tagName={"ProductPreview"}>
          </List>
        </div>
      </div>
    );
  }
}

const mapStataeToProps = (state) => {
  return {
    products: state.product.products,
  };
};

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStataeToProps, mapDispatchToProps)(productsSection);
