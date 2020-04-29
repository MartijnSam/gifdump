import React, { useState, useEffect } from 'react';

export default function LikeCounter() {
    const [liked, set_Liked] = useState(false);
    const clickLiked = () => {set_Liked(!liked)}
        
    const [colorLike, set_colorLike] = useState(false)
    const clickLikeColor = () => {set_colorLike(!colorLike)}
    const clickLike = () => {clickLikeColor();
    clickLiked()};

    const numberOfLikes = 0
    const numberOfLikesCounter = (liked) ? (numberOfLikes+1) : (numberOfLikes+0)
    const color = (colorLike) ? {'background-color':"green"} : {'background-color':"red"};

    console.log("A render!");

    useEffect(() => {
      console.log("The useEffect action!");
    }, [numberOfLikesCounter]);

    return (<div><p>This post has <b>{numberOfLikesCounter}</b> likes!
    </p><p><button style={color} onClick={clickLike}>Like</button>
    </p></div>)
}
