import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { post, postImage } from './Post.module.css';

class Post extends Component {
  render() {
    const { id, userId, title, body, image } = this.props.post;
    const { index } = this.props;

    return (
        <div key={id} className={post}>
            <h2>{title}</h2>
            <h5>Date: 2019-04-0{index}. Created by: {userId}</h5>
            <div className={postImage}>
                <img src={image} alt=""/>
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