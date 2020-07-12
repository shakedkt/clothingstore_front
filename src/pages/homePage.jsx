import React, { Component } from 'react';
import ProductsSection from '../cmps/products/productsSection';

export default class homePage extends Component {

    state = {
        section: '',
        title: 'all',
    };

    changeSection(section) {
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
        console.log(section);

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

        return (
            <section className="home">
                <div className="links">
                    <button className="shirts-link" onClick={() => this.changeSection('')}> all </button>
                    <button className="shirts-link" onClick={() => this.changeSection('Topwear')}> shirts </button>
                    <button className="shirts-link" onClick={() => this.changeSection('Bottomwear')}> pants </button>
                    <button className="shirts-link" onClick={() => this.changeSection('Watches')}> Watches </button>
                </div>

                <div className="category-header">
                    <h2 className="category-title"> {this.state.title} </h2>
                    <h3 className="category-subtitle"> Shop the most amazing designer clothes and give your wardrobe a fresh new look for the season ahead.</h3>
                </div>

                <ProductsSection section={this.state.section}> </ProductsSection>
            </section>
        );
    }
}