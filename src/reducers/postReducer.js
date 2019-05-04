import { FETCH_POSTS, NEW_POST, DELETE_POST } from '../actions/types';
import { filter } from 'lodash';

const initialState = {
    posts: [],
    post: {}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: payload
            };
        case NEW_POST:
            return {
                ...state,
                items: [payload, ...state.items]
            };
        case DELETE_POST:
            return {
                ...state,
                items: filter(state.items, ({ id }) => id !== payload)
            };
        default:
            return state;
    }
}