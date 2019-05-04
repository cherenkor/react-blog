import { FETCH_POSTS, NEW_POST, DELETE_POST } from './types';
import axios from 'axios';
import uuid from 'uuid';
import config from '../config/config';

export const fetchPosts = (limit = 3) => dispatch => {
    const limitQuery = `?_limit=${limit}`;
    axios
        .get(`${config.baseUrl}/posts${limitQuery}`)
        .then(({ data }) => 
            dispatch({
                type: FETCH_POSTS,
                payload: data
            })
        )
        .catch(console.error);
};

export const newPost = newPost => dispatch => {
    axios
        .post(`${config.baseUrl}/posts`, newPost)
        .then(({ data }) => 
            dispatch({
                type: NEW_POST,
                payload: {
                    ...data,
                    id: uuid.v4()
                }
            })
        )
        .catch(console.error);
};

export const deletePost = postId => dispatch => {
    axios
        .delete(`${config.baseUrl}/posts/${postId}`)
        .then(() => 
            dispatch({
                type: DELETE_POST,
                payload: postId
            })
        )
        .catch(console.error)
};