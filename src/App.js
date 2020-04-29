import React from 'react';
import Navbar from './components/navbar/Navbar';
import PostList from './components/PostList'

import './App.css';

function App() {
  return (
    <main className="container">
      
    <div className="App">
      <Navbar />
    </div>
    <div className="row">
    <PostList />
    </div>

    <div>
      
    </div>
    </main>
  );
}

export default App;
