import React, { Component } from 'react';

import Home from './pages/homePage'
import ProductPage from './pages/productPage'
import Header from './cmps/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import cartPage from './pages/cartPage'

const history = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={history}>

          <Header></Header>

          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products/:id" exact component={ProductPage} />
              <Route path="/cart" exact component={cartPage} />

            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
