import React, { Component } from 'react';
import Post from '../Post/Post';
import PropTypes from 'prop-types';

import { list } from './PostList.module.css';

class PostList extends Component {
  render() {
      const { posts } = this.props;

    return (
      <div className={list}>
        {
            posts.map((post, i) => {
                return <Post key={post.id} post={post} index={i} />
            })
        }
      </div>
    )
  }
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostList;