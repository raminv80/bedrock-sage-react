import React from 'react';
import AddArticle from '../components/AddArticle.jsx';
import Articles from '../components/Articles.jsx';
import Post from '../components/Post.jsx';

const App = ()=>(
  <div>
    <h2>React is working!</h2>
    <AddArticle article="Here I come!"/>
    <Articles/>
    <Post id="1"/>
  </div>
);

export default App;
