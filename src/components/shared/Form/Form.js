import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { wrap } from './Form.module.css';

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userId: 1,
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  addPost (e) {
    e.preventDefault();
    this.setState({
      userId: 1,
      title: '',
      body: ''
    })
    this.props.addPost(this.state)
  }

  render() {
    const { userId, title, body } = this.state;

    return (
      <div className={wrap}>
        <form onSubmit={this.addPost}>
          <label htmlFor="userId">UserId</label>
          <input onChange={this.onChange} value={userId} type="number" id="userId" placeholder="userId" />
          <label htmlFor="title">Title</label>
          <input onChange={this.onChange} value={title} type="text" id="title" placeholder="title" />
          <label htmlFor="body">Body</label>
          <textarea onChange={this.onChange} value={body} type="text" id="body" placeholder="body"></textarea>
          <input type="submit" value="Add"/>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default Form;