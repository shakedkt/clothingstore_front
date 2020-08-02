import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import SvgBeg from "../images/bag";
import SvgWishlistSec from "../images/wishlistThird";
import Burger from "../cmps/burger";
import { changeSection } from "../actions/productActions";
import { changeTitle } from "../actions/productActions";
import NavBar from "../cmps/navBar";


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: "",
      width: 0,
      height: 0,
    };
    this.changeSection = this.changeSection.bind(this);

  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  async changeSection(section) {
    await this.props.changeSection(section);
    this.sectionName(section);
  };

  sectionName(section) {
    if (section === "") {
      this.props.changeTitle("all products");
    } else {
      this.props.changeTitle(section);
    }
  }

  render() {
    var count = this.props.cart;

    if (count.length > 0) {
      count = this.props.cart.length;
    }

    let width = window.innerWidth;
    if (width < 768) {
      return (
        <header className="navbar">
          <Burger changeSection={this.changeSection}></Burger>
          <div className="logo">
            <NavLink activeClassName="active" exact to="/">
              {" "}
              clothes &amp; brands
            </NavLink>
          </div>

          <div className="nav-bar">
            <NavLink
              className="wishlist-link"
              activeClassName="active"
              exact
              to="/wishlist"
            >
              <div className="svg-image-continer">
                <SvgWishlistSec className="svg"> </SvgWishlistSec>
              </div>
            </NavLink>

            <NavLink
              className="bag-link"
              activeClassName="active"
              exact
              to="/cart"
            >
              <div className="bag-image-continer">
                <SvgBeg className="svg"> </SvgBeg>
              </div>

              <h3> {count} </h3>
            </NavLink>
          </div>
        </header>
      );
    }

    return (
      <header >
        <div className="navbar">
          <div className="logo">
            <NavLink activeClassName="active" exact to="/">
              {" "}
            clothes &amp; brands
          </NavLink>
          </div>

          <div className="nav-bar">
            <NavLink
              className="wishlist-link"
              activeClassName="active"
              exact
              to="/wishlist"
            >
              <div className="svg-image-continer">
                <SvgWishlistSec className="svg"> </SvgWishlistSec>
              </div>
            </NavLink>

            <NavLink
              className="bag-link"
              activeClassName="active"
              exact
              to="/cart"
            >
              <div className="bag-image-continer">
                <SvgBeg className="svg"> </SvgBeg>
              </div>

              <h3> {count} </h3>
            </NavLink>
          </div>
        </div>
        <NavBar changeSection={this.changeSection}> </NavBar>

      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.products,
    section: state.product.section,
  };
};

const mapDispatchToProps = {
  changeSection,
  changeTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
