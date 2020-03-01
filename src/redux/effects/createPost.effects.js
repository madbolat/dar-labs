import { addPost } from "../actions/posts.actions";

export function createPost(post) {
    return function(dispatch, getState) {
        return dispatch(addPost(post));
    }
}