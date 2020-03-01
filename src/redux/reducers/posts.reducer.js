const initialState = {
    postsData: null,
    loading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "SET_POSTS":
            return {
                ...state,
                postsData: action.payload,
            }
        case "ADD_POST":
            return {
                ...state,
                postsData: [...state.postsData, action.payload]
            }
        case 'SET_POSTS_LOADING':
            return {
                ...state,
                loading: action.payload,
            }
        default: 
            return state;
    }
}