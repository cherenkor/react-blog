import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import PropTypes from 'prop-types';

import { isEmpty } from 'lodash';

import Content from "../layout/Content/Content";
import Sidebar from "../layout/Sidebar/Sidebar";

class Home extends Component {

    componentWillMount () {
        if (isEmpty(this.props.posts)) this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props;

        return (
            <div className="main">
                <Content posts={posts} />
                <Sidebar />
            </div>
        )
    }
}

Home.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = ({ posts }) => ({
    posts: posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Home);