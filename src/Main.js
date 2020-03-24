import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Menu, Typography } from 'antd';

import Content from './layout/Content';
import Header from './layout/Header';
import Sider from './layout/Sider';

import PostsList from './posts/PostsList'
import UserAvatar from './user/UserAvatar';
import PostForm from './posts/PostForm';

import { getPosts } from './redux/effects/posts.effects';
import { getUser } from './redux/effects/user.effects';
import UserForm from './user/UserForm';

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
    <Router>
      <div className="App">
        <Header>
          <UserAvatar />
        </Header>
        <div className="App__main">
          <Sider>
            <Menu>
              <Menu.Item>
                  <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                  <Link to="/posts">Posts</Link>
              </Menu.Item>
              <Menu.Item>
                  <Link to="/user-form/alice">User form for Alice</Link>
              </Menu.Item>
              <Menu.Item>
                  <Link to="/user-form/bob">User form for Bob</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Switch>
              <Route exact path="/">
                <Typography.Title>Welcome home</Typography.Title>
              </Route>
              <Route path="/posts">
                <PostsList />
                <PostForm />
              </Route>
              <Route path="/user-form/:userId">
                <UserForm />
              </Route>
            </Switch>
            {/* <LikesCounter count={likedCount} /> */}
            {/* <PostsList items={posts} onLikedClicked={onLikedClicked} /> */}
            {/* <PostsList />
            <PostForm /> */}
          </Content>
        </div>
      </div>
    </Router>
  );
}

// connect (store, dispatch)
export default connect(null, { getPosts, getUser })(Main);