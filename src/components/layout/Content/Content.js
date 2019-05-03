import React, { Component } from 'react';
import PostList from '../../shared/PostList/PostList';

import './Content.css';

class AContent extends Component {
    render () {
        return (
            <div id="content">
                <PostList posts={this.props.posts} />
            </div>
        )
    }
};

export default AContent;