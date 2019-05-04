import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newPost } from '../../../actions/postActions';
import PropTypes from 'prop-types';

import Form from '../../shared/Form/Form';

import './Sidebar.css';

class ASidebar extends Component {
    render () {
        const { newPost } = this.props;

        return (
            <div id="sidebar">
                <h2 style={{ marginTop: '0' }}>Add Post</h2>
                <Form onSubmit={newPost} buttonName='Add'></Form>
            </div>
        )
    }
}

ASidebar.propTypes = {
    newPost: PropTypes.func.isRequired
};

export default connect(null, { newPost })(ASidebar)