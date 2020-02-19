import React from 'react';
import PostContext from './PostContext';

class Post extends React.Component {
    render() {
        return (
            <PostContext.Consumer>
                {context => (
                    <div className="Post__item">
                        <div className="Post__item-title">{context.post.title}</div>
                        <div className="Post__item-text">{context.post.text}</div>
                        <div className="Post__item-buttons">
                            <button 
                                className={context.post.liked ? 'Liked' : ''} 
                                onClick={() => context.onLikedClicked(context.post.id)}
                            >
                                {context.post.liked ? 'Liked' : 'Like'}
                            </button>
                        </div>
                    </div>
                )}
            </PostContext.Consumer>
        )
    }
}

export default Post;