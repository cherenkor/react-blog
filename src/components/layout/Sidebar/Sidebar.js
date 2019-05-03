import React, { Component } from 'react';
import Form from '../../shared/Form/Form';

import './Sidebar.css';

export default class ASidebar extends Component {
    render () {
        return (
            <div id="sidebar">
                <h2 style={{ marginTop: '0' }}>Add Post</h2>
                <Form></Form>
            </div>
        )
    }
}