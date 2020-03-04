import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { geekblue } from '@ant-design/colors';

// My imports
import './PostsList.css';
import Post from './Post';
import PostContext from './PostContext';

function PostsList({posts}) {
    return posts ? (
        <Layout.Content style={{background: geekblue[2]}} className="PostsList__list">
            {posts.map(post => 
                <PostContext.Provider value={post} key={post.id}>
                    <Post />
                </PostContext.Provider>
            )}
        </Layout.Content>
    ) : null;
}

const mapStateToProps = state => ({
    posts: state.posts.postsData
});

export default connect(mapStateToProps)(PostsList);