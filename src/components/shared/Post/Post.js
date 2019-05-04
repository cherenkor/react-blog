import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost } from '../../../actions/postActions';
import { editPost } from '../../../actions/postActions';

import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Form from '../Form/Form';

import { postWrapper, postHeader, postActions, postImage } from './Post.module.css';

class Post extends Component {
    state = {
        post: {
            userId: 0,
            title: '',
            body: ''
        },
        isEdit: false
    }

    toggleEditPost = () => {
        this.setState({isEdit: !this.state.isEdit});
    }

    savePost = (post) => {
        this.props.editPost(post);
        this.toggleEditPost();
    }

    render() {
        const { isEdit } = this.state;
        const { id, userId, title, body } = this.props.post;
        const { post, index, deletePost } = this.props;
        const form = <Form onSubmit={this.savePost} post={{...post}} buttonName="Save" />;
        const postComponent = (
            <React.Fragment>
                <div className={postHeader}>
                    <h2>{title}</h2>
                <div className={postActions}>
                    <button onClick={this.toggleEditPost}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button onClick={() => deletePost(id)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
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
            </React.Fragment>    
        );

        return (
            <div key={id} className={postWrapper}>
                {
                    isEdit ? form : postComponent
                }    
            </div>                    
        )
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    deletePost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
};

export default connect(null, { deletePost, editPost })(Post);