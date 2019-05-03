import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { post, postImage } from './Post.module.css';

class Post extends Component {
  render() {
    const { id, userId, title, body } = this.props.post;
    const { index } = this.props;

    return (
        <div key={id} className={post}>
            <h2>{title}</h2>
            <h5>Date: 2019-04-0{index}. Created by: {userId}</h5>
            <div className={postImage}>
                <img src="https://cdn.the-scientist.com/assets/articleNo/30636/iImg/2186/b531a5bf-c7af-43de-9fc1-3560813f9d49-online.jpg" alt=""/>
            </div>
            <div className="post-body">
                <p>
                    {body}
                </p>
            </div>                    
        </div>                    
    )
  }
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default Post;