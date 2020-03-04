import React from 'react';
import PostContext from './PostContext';
import { Card } from 'antd';

function Post() {
    return (
        <PostContext.Consumer>
            {post => (
                <Card title={post.title} style={{marginBottom: "20px"}}>
                    <div className="Post__item-text">{post.body}</div>
                    { post.createdAt ? <div className="Post__date"><hr/><i className="far fa-calendar-alt" /> Created at: { post.createdAt }</div> : ''}
                    {/* <div className="Post__item-buttons">
                        <button 
                            className={post.liked ? 'Liked' : ''} 
                            onClick={() => onLikedClicked(post.id)}
                        >
                            {post.liked ? 'Liked' : 'Like'}
                        </button>
                    </div> */}
                </Card>
            )}
        </PostContext.Consumer>
    )
}

export default Post;