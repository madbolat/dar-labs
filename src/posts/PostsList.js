import React from 'react';
import { connect } from 'react-redux';

// My imports
import './PostsList.css';
import Post from './Post';
import PostContext from './PostContext';

function PostsList({posts}) {
    return posts ? (
        <div className="PostsList__list">
            {posts.map(post => 
                <PostContext.Provider value={post} key={post.id}>
                    <Post />
                </PostContext.Provider>
            )}
        </div>
    ) : null;
}

const mapStateToProps = state => ({
    posts: state.posts.postsData
});

export default connect(mapStateToProps)(PostsList);