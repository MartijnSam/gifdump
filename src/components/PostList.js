// src/components/ArticleList.js
import React, { useState, useEffect } from "react";
import PostCard from "./PostCard"
import Timeout from "await-timeout";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'

export default function PostList() {
  const [posts, set_posts] = useState();



//   const click = () => {
//       return set_articles([""])
//   };
async function postsDataFetching() {
    // Getting back data from the net, through the wire, air, and the ocean:
    const res = await axios.get("https://my-json-server.typicode.com/MartijnSam/gifdump/posts");
    await Timeout.set(2000);
    console.log(`this is what im getting: ${res}`)
    return set_posts(res.data)
  }

   useEffect(() => {postsDataFetching()
},[])

    function render (posts){
        if (posts) {
            return posts.map(post => {
                return (<PostCard title={post.title} content={post.content} user={post.user} gif={post.gif}/>)})
        }
        else return (<Spinner animation="grow" />)
    }

  return (
    <div>
      {render(posts)}
    </div>
  );
}