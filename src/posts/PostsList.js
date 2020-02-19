import React from 'react';
import './PostsList.css';
import Post from './Post';
import PostContext from './PostContext';

class PostsList extends React.Component {
 
    render() {
        return (
            <div className="PostsList__list">
                {
                    this.props.items.map(post => 
                        <PostContext.Provider 
                            value={{post: post, onLikedClicked: this.props.onLikedClicked}} 
                            key={post.id}
                        >
                            <Post />
                        </PostContext.Provider>
                    )
                }
            </div>
        );
    }
}

export default PostsList;