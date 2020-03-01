import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Content from './layout/Content';
import Header from './layout/Header';
import Sider from './layout/Sider';

import PostsList from './posts/PostsList'
import UserAvatar from './user/UserAvatar';
import PostForm from './posts/PostForm';

import { getPosts } from './redux/effects/posts.effects';
import { getUser } from './redux/effects/user.effects';

// import LikesCounter from './LikesCounter';
// import UserContext from './user/UserContext';

/*
const postsData = [
  {
    id: 1,
    title: 'Hello World',
    body: 'salem alem',
    liked: false,
  }
];
*/

const Main = ({ getPosts, getUser }) => {
    
  /*// LIKED 
  const [posts, setPosts] = useState(postsData);
  const [likedCount, setLikedCount] = useState(0);
  useEffect(() => {
    setLikedCount(posts.filter(p => p.liked).length);
  });
  const onLikedClicked = (postId) => {
    const newPosts = posts.map(post => {
      post.liked = (postId === post.id) ? !post.liked : post.liked;
      return post;
    });
    setPosts(newPosts);
  }*/

  // GET POSTS
  useEffect(() => {
    getPosts();
    getUser();
  },[]);

  return (
    <div className="App">
      <Header>
        <UserAvatar />
      </Header>
      <div className="App__main">
        <Sider />
        <Content>
          {/* <LikesCounter count={likedCount} /> */}
          {/* <PostsList items={posts} onLikedClicked={onLikedClicked} /> */}
          <PostForm />
          <PostsList />
        </Content>
      </div>
    </div>
  );
}

// connect (store, dispatch)
export default connect(null, { getPosts, getUser })(Main);