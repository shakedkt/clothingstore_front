import React, { Component } from 'react';

import Home from './pages/homePage';
import ProductPage from './pages/productPage';
import Header from './cmps/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import cartPage from './pages/cartPage';
import wishlistPage from './pages/wishlistPage';

const history = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <div className="main-layout">
        <Router history={history}>

          <Header></Header>

          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products/:id" exact component={ProductPage} />
              <Route path="/cart" exact component={cartPage} />
              <Route path="/wishlist" exact component={wishlistPage} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
