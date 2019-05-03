import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost } from '../../../actions/postActions';

import { post, postHeader, postDeleteBtn, postImage } from './Post.module.css';

class Post extends Component {
  render() {
    const { id, userId, title, body } = this.props.post;
    const { index, deletePost } = this.props;

    return (
        <div key={id} className={post}>
            <div className={postHeader}>
                <h2>{title}</h2>
               <div>
                <button onClick={() => deletePost(id)} className={postDeleteBtn}>&#10005;</button>
               </div>
            </div>
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
    index: PropTypes.number.isRequired,
    deletePost: PropTypes.func.isRequired
};

export default connect(null, { deletePost })(Post);