import React from 'react';
import LikeCounter from './LikeCounter';
import Card from 'react-bootstrap/Card'

export default function Posts (props) {
    return(
        <div class="card">
            <div class="card-body">
                <Card.Header>Posted by: {props.user}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.content}</Card.Text>
                    <Card.Img src={props.gif} alt="gif"/>
                </Card.Body>
                <Card.Footer>
                    <LikeCounter/>
                </Card.Footer>
            </div>
        </div>
    )
}