import React from 'react';
import LikeCounter from './LikeCounter';

export default function Posts (props) {
    return(
        <div class="card">
            <div class="card-body">
                    {props.title}
                    {props.content}
                    {props.gif}
                    {props.user}
                    <LikeCounter/>

            </div>
        </div>
    )
}