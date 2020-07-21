import React, { Component } from 'react';
import ProductsSection from '../cmps/products/productsSection';
import NavBar from '../cmps/navBar';
export default class homePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            section: '',
            title: 'all',
            width: 0,
            height: 0

        };

        this.changeSection = this.changeSection.bind(this);
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    changeSection(section) {
        console.log('section', section);

        this.setState({
            section: section,
        });
        this.sectionName(section)
    }

    componentDidUpdate(prevState) {
        if (prevState.section !== this.state.section) {
        }
    }

    sectionName = (section) => {
        if (section === '') {
            this.setState({
                title: 'all products'
            })
        } else {
            this.setState({
                title: section
            })
        }
    }

    render() {

        let width = window.innerWidth;
        if (width < 768) {

            return (

                <section className="home">
                    <div className="category-header">
                        <h2 className="category-title"> {this.state.title} </h2>
                        <h3 className="category-subtitle"> Shop the most amazing designer clothes and give your wardrobe a fresh new look for the season ahead.</h3>
                    </div>

                    <ProductsSection section={this.state.section}> </ProductsSection>
                </section>
            )
        }
        return (
            <section className="home">
                <NavBar changeSection={this.changeSection} > </NavBar>
                <div className="category-header">
                    <h2 className="category-title"> {this.state.title} </h2>
                    <h3 className="category-subtitle"> Shop the most amazing designer clothes and give your wardrobe a fresh new look for the season ahead.</h3>
                </div>

                <ProductsSection section={this.state.section}> </ProductsSection>
            </section>
        );
    }
}