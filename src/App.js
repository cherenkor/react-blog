import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

import './App.css';
import './styles/responsive.css';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
