// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

// import ProductList from '../cmps/ProductList';
// import { connect } from 'react-redux';

// class pantsPage extends Component {

//     async componentDidMount() {
//         this.loadProducts();
//     }

//     loadProducts = () => {
//         this.props.loadProducts('pants')
//     }

//     render() {

//         return (
//             <section className="home">

//                 <h2>PANTS</h2>

//                 <div className="products">
//                     <ProductList products={this.props.products}></ProductList>
//                 </div>
//             </section>
//         );
//     }
// }

// const mapStataeToProps = (state) => {
//     return {
//         products: state.product.products,
//         product: state.product.currProduct
//     }
// }

// const mapDispatchToProps = {
//     loadProducts,
// }

// export default connect(mapStataeToProps, mapDispatchToProps)(pantsPage)


