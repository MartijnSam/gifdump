// src/components/ArticleList.js
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard"
import Timeout from "await-timeout";
import axios from "axios";

export default function ArticleList() {
  const [articles, set_articles] = useState();

function validate (articles){
    if (articles) {
        return render(articles)
    }
    else return (<p>Loading...</p>)
}

  const click = () => {
      return set_articles([""])
  };

   useEffect(() => {
      async function doSomeDataFetching() {
    console.log("I'm gonna fetch some data!");
  
    // Getting back data from the net, through the wire, air, and the ocean:
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
    await Timeout.set(2000);
    return set_articles(res.data)
  }
doSomeDataFetching()
})

function render (articles) {
    return articles.map(article => {
    return (<ArticleCard title={article.title} content={article.body}/>)})}

  return (
    <div>
        <button onClick={click}>Remove Articles</button>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {validate(articles)}
    </div>
  );
}