import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<App/>
);

