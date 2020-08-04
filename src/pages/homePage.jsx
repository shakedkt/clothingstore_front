import React, { Component } from "react";
import ProductsSection from "../cmps/products/productsSection";
import { changeSection } from "../actions/productActions";
import { changeTitle } from "../actions/productActions";
import { connect } from "react-redux";

class homePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: "",
      title: "all",
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
  }

  sectionName = (section) => {
    if (section === "") {
      this.props.changeTitle("all products");
    } else {
      this.props.changeTitle(section);
    }
  };

  render() {
    let width = window.innerWidth;

    if (width < 768) {
      return (
        <section className="home">
          <div className="category-header">
            <h2 className="category-title"> {this.props.section.title} </h2>
            <h3 className="category-subtitle">
              Shop the most amazing designer clothes and give your wardrobe a
              fresh new look for the season ahead.
            </h3>
          </div>

          <ProductsSection
            section={this.props.section.section}
          ></ProductsSection>
        </section>
      );
    }

    return (
      <section className="home">
        {/* <NavBar changeSection={this.changeSection}> </NavBar> */}
        <div className="category-header">
          <h2 className="category-title"> {this.props.section.title} </h2>
          <h3 className="category-subtitle">
            Shop the most amazing designer clothes and give your wardrobe a
            fresh new look for the season ahead.
          </h3>
        </div>
        <ProductsSection section={this.props.section.section}></ProductsSection>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    section: state.product,
  };
};

const mapDispatchToProps = {
  changeSection,
  changeTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(homePage);
