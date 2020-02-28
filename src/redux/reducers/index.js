import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import postsReducer from "./posts.reducer";

const appReducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
});

export default appReducers;