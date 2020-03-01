export const setPosts = posts => {
    return {
        type: "SET_POSTS",
        payload: posts,
    }
}

export const setLoading = status => {
    return {
        type: "SET_POSTS_LOADING",
        payload: status,
    }
}

export const addPost = post => {
    return {
        type: "ADD_POST",
        payload: post,
    }
}