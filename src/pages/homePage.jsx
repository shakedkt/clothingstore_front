import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ProductsSection from '../cmps/productsSection'

export default class homePage extends Component {

    state = {
        section: ''
    };

    changeSection(section) {
        this.setState({
            section: section
        });
    }

    componentDidUpdate(prevState) {
        if (prevState.section !== this.state.section) {
        }
    }

    render() {

        return (
            <section className="home">
                <div className="links">

                    <button className="shirts-link" onClick={() => this.changeSection('')}> all </button>
                    |
                    <button className="shirts-link" onClick={() => this.changeSection('shirts')}> shirts </button>
                    |
                    <button className="shirts-link" onClick={() => this.changeSection('pants')}> pants </button>
                    |
                    <button className="shirts-link" onClick={() => this.changeSection('shoes')}> shoes </button>

                </div>

                <ProductsSection section={this.state.section}> </ProductsSection>


            </section>
        );
    }
}