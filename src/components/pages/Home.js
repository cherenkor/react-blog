import React, { Component } from 'react';
import uuid from 'uuid';
import posts from '../../data/posts.json';

import Content from "../layout/Content/Content";
import Sidebar from "../layout/Sidebar/Sidebar";

export default class Home extends Component {
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

  render() {
    const { posts } = this.state;

    return (
        <div className="main">
            <Content posts={posts} />
            <Sidebar addPost={this.addPost} />
        </div>
    )
  }
}
