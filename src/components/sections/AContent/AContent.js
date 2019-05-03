import React, { Component } from 'react';
import PostList from '../../shared/PostList/PostList';
import posts from '../../../data/posts.json';

import './AContent.css';

 class AContent extends Component {
    render () {
        return (
            <div id="content">
                <PostList posts={posts} />
            </div>
        )
    }
}

export default AContent