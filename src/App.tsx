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


  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Название поста'/>
        <input type="text" placeholder='Описание поста'/>
      </form>
      <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
