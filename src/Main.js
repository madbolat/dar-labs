import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import Content from './layout/Content';
import Header from './layout/Header';
import Sider from './layout/Sider';

import PostsList from './posts/PostsList'
// import LikesCounter from './LikesCounter';

import UserAvatar from './user/UserAvatar';
// import UserContext from './user/UserContext';

import { setUser } from './redux/actions/user.actions';
import { getUser } from './redux/effects/user.effects';

// import { setPosts } from './redux/actions/posts.actions';
import { getPosts } from './redux/effects/posts.effects';

/*
const postsData = [
  {
    id: 1,
    title: 'Hello World',
    body: 'salem alem',
    liked: false,
  }, {
    id: 2,
    title: 'Uronila sosisku',
    body: 'Ula yakubenya',
    liked: false,
  }, {
    id: 3,
    title: 'Koranavirus',
    body: 'China haram',
    liked: false,
  }
];
*/

const Main = ({ userLoading, setUser, getUser, getPosts }) => {
    
  /*
  const [posts, setPosts] = useState(postsData);

  // LIKED 
  
  const [likedCount, setLikedCount] = useState(0);

  useEffect(() => {
    setLikedCount(posts.filter(p => p.liked).length);
  });

  const onLikedClicked = (postId) => {
    console.log(`Your liked post ${postId}`);
    const newPosts = posts.map(post => {
      if(postId === post.id) {
        post.liked = !post.liked;
      }
      return post;
    });
    setPosts(newPosts);
  }
  */

  // CHANGE NAME
  const onNameChangeClick = useCallback(() => {
    getUser();
  });

  // GET POSTS
  useEffect(() => {
    getUser();
    getPosts();
  },[]);

  return (
    <div className="App">
      <Header>
        <UserAvatar />
      </Header>
      <div className="App__main">
        <Sider>
          <div className="loadBtn">
            { userLoading ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> :  <div className="lds-ring"></div>}
            <br/>
            <button onClick={onNameChangeClick} disabled={userLoading}>
              { userLoading ? 'Loading...':  'Change name'}
            </button>
          </div>
        </Sider>
        <Content>
          {/* <LikesCounter count={likedCount} /> */}
          {/* <PostsList items={posts} onLikedClicked={onLikedClicked} /> */}
          <PostsList />
        </Content>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  userLoading: state.user.loading
})

// connect (store, dispatch)
export default connect(mapStateToProps, { setUser, getUser, getPosts })(Main);