import React, { useState } from 'react';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
<<<<<<< HEAD
import MyButton from './components/UI/button/MyButton';
=======
>>>>>>> da9ce6b049a3d04ab9730300ecf5510d015485fc
import './styles/App.css';




<<<<<<< HEAD

=======
>>>>>>> da9ce6b049a3d04ab9730300ecf5510d015485fc
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Discription' },
    { id: 2, title: 'JavaScript 2', body: 'Discription' },
    { id: 3, title: 'JavaScript 3', body: 'Discription' },
  ])

<<<<<<< HEAD

  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Название поста'/>
        <input type="text" placeholder='Описание поста'/>
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS"/>
=======
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Discription' },
    { id: 2, title: 'Python 2', body: 'Discription' },
    { id: 3, title: 'Python 3', body: 'Discription' },
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="Посты про JS"/>
      <PostList posts={posts2} title="Посты про Python"/>
>>>>>>> da9ce6b049a3d04ab9730300ecf5510d015485fc
    </div>
  );
}

export default App;
