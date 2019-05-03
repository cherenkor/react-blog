import React from 'react';
import PostList from '../../shared/PostList/PostList';
import posts from '../../../data/posts.json';

import './AContent.css';

export default function AContent () {
    return (
        <div id="content">
            <PostList posts={posts} />
        </div>
    )
};