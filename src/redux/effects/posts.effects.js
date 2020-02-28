import { setPosts, setLoading } from "../actions/posts.actions";

export function getPosts() {
    return function(dispatch, getState) {
        dispatch(setLoading(true));
        return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                .then(res => res.json())
                .then(posts => {
                    if (!posts || !posts.length) {
                        dispatch(setPosts(null));
                        return;
                    }
                    dispatch(setPosts(posts));
                })
                .finally(() => {
                    dispatch(setLoading(false));
                });
    }
}