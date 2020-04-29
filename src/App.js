import React from 'react';
import Navbar from './components/navbar/Navbar';
import PostList from './components/PostList'
import Sidebar from './components/Sidebar'

import './App.css';


function App() {
  return (<main className="container">
            <div className="navbar">
              <Navbar />
            </div>
            
            <div className="content-container">
              <div className="sidebar">
                <Sidebar/>
              </div>
              <div className="postlist-container">
                <div className="postlist">
                  <div className="row">
                    <div class="col-md-13">
                      <PostList />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
  );}

export default App;
