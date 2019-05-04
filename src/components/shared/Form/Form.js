import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { wrap, error } from './Form.module.css';

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = props.post || {
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

    if(this.hasError(this.state)) return;

    this.props.onSubmit(this.state);
    this.setState({
      userId: 1,
      title: '',
      body: ''
    })
  }

  hasError(form) {
    const values = Object.values(form);
    return values.some(val => !val);
  }

  errorClass = (input) => {
    return input ? '' : error;
  }

  render() {
    const { userId, title, body } = this.state;
    const { buttonName } = this.props;

    return (
      <div className={wrap}>
        <form onSubmit={this.addPost}>
          <label htmlFor="userId">UserId</label>
          <input onChange={this.onChange} value={userId} className={this.errorClass(userId)} type="number" id="userId"  />
          <label htmlFor="title">Title</label>
          <input onChange={this.onChange} value={title} className={this.errorClass(title)} type="text" id="title"  />
          <label htmlFor="body">Body</label>
          <textarea onChange={this.onChange} value={body} className={this.errorClass(body)} type="text" id="body" ></textarea>
          <input type="submit" value={buttonName}/>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  post: PropTypes.object,
  buttonName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;