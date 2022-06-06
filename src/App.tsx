import React, { useState } from 'react';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';




function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Discription' },
    { id: 2, title: 'JavaScript 2', body: 'Discription' },
    { id: 3, title: 'JavaScript 3', body: 'Discription' },
  ])

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Discription' },
    { id: 2, title: 'Python 2', body: 'Discription' },
    { id: 3, title: 'Python 3', body: 'Discription' },
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="Посты про JS"/>
      <PostList posts={posts2} title="Посты про Python"/>
    </div>
  );
}

export default App;
