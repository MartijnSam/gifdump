import React from 'react';
import Navbar from './components/navbar/Navbar';
import Posts from './components/PostCard'
import ArticleList from './components/ArticleList'

import './App.css';

function App() {
  return (
    <main className="container">
      
    <div className="App">
      <Navbar />
    </div>
    <div className="row">
      <Posts />
    </div>

    <div>
      <ArticleList />
    </div>
    </main>
  );
}

export default App;
