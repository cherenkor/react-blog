import React, { Component } from 'react';
import Post from '../Post/Post';
import PropTypes from 'prop-types';

import { list } from './PostList.module.css';
import { isEmpty } from 'lodash';

class PostList extends Component {
  render() {
    const posts = isEmpty(this.props.posts)
                  ? <p style={noPostsStyle}>No posts</p>
                  : this.props.posts.map((post, i) => {
                    return <Post key={post.id} post={post} index={i} />
                  });
    return (
      <div className={list}>
        { posts }
      </div>
    )
  }
}

const noPostsStyle = {
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: '500',
  fontStyle: 'italic'
};

PostList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostList;