import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import './App.css';
import './styles/responsive.css';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Footer />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
