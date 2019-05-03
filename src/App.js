import React, { Component } from 'react';
import uuid from 'uuid';

import Header from "./components/layout/Header/Header";
import Content from "./components/layout/Content/Content";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Footer from "./components/layout/Footer/Footer";

import './App.css';
import './styles/responsive.css';

import posts from './data/posts.json';

class App extends Component {
  state = {
    posts
  }

  addPost = (data) => {
    const post = {
      id: uuid.v4(),
      ...data
    };
    this.setState({
      posts: [post, ...this.state.posts]
    })
  }

  render () {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="main">
          <Content posts={posts} />
          <Sidebar addPost={this.addPost} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
