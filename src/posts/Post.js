import React from 'react';
import PostContext from './PostContext';

function Post() {
    return (
        <PostContext.Consumer>
            {post => (
                <div className="Post__item">
                    <div className="Post__item-title">{post.title}</div>
                    <div className="Post__item-text">{post.body}</div>
                    {/* <div className="Post__item-buttons">
                        <button 
                            className={post.liked ? 'Liked' : ''} 
                            onClick={() => onLikedClicked(post.id)}
                        >
                            {post.liked ? 'Liked' : 'Like'}
                        </button>
                    </div> */}
                </div>
            )}
        </PostContext.Consumer>
    )
}

export default Post;