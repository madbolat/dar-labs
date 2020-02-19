import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

import PostsList from './posts/PostsList'
import LikesCounter from './LikesCounter';

import Content from './layout/Content';
import Header from './layout/Header';
import Sider from './layout/Sider';

import UserAvatar from './user/UserAvatar';
import UserContext from './user/UserContext';

const postsData = [
  {
    id: 1,
    title: 'Hello World',
    text: 'salem alem',
    liked: false,
  }, {
    id: 2,
    title: 'Uronila sosisku',
    text: 'Ula yakubenya',
    liked: false,
  }, {
    id: 3,
    title: 'Koranavirus',
    text: 'China haram',
    liked: false,
  }
]

function App() {

  const [posts, setPosts] = useState(postsData);
  const [likedCount, setLikedCount] = useState(0);

  const [user, setUser] = useState({
    firstName: 'Madi',
    lastName: 'Bolatov'
  });

  useEffect(() => {
    setLikedCount(posts.filter(p => p.liked).length);
  });

  console.log(posts);

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

  const onNameChangeClick = useCallback(() => {
    setUser({
      firstName: 'DD',
      lastName: 'DDD'
    });
  });

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Header>
          <UserAvatar />
        </Header>
        <div className="App__main">
          <Sider>
            <button onClick={onNameChangeClick}>Change name</button>
          </Sider>
          <Content>
            <LikesCounter count={likedCount} />
            <PostsList items={posts} onLikedClicked={onLikedClicked}/>
          </Content>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
