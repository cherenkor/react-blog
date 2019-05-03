import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { wrap } from './Form.module.css';

class Form extends Component {
  state = {
    userId: null,
    title: "",
    body: ""
  }

  render() {
      const { userId, title, body } = this.state;

    return (
      <div className={wrap}>
        <form action="">
          <label for="userId">UserId</label>
          <input value={userId} type="number" id="userId" placeholder="userId" />
          <label for="title">Title</label>
          <input value={title} type="text" id="title" placeholder="title" />
          <label for="body">Body</label>
          <input value={body} type="text" id="body" placeholder="body" />
          <input type="submit" value="Add"/>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Form;