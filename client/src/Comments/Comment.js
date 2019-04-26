import React from "react";
import Card from 'react-bootstrap/Card'

const Comment = props => {
  return (
    <Card>
      <Card.Header>{props.comment.user.name} :</Card.Header>
      <Card.Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.comment.comment}</Card.Text>
      {console.log(props.comment)}
    </Card>
    
  );
};

export default Comment;