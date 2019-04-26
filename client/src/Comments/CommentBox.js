import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NewComment from "./NewComment";
import Comments from "./Comments";
import base from "../base";

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      comments: {},
      isLoggedIn: false,
      user: ""
    };

    this.refComments = base.syncState("comments", {
      context: this,
      state: "comments"
    });

    this.props.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true, user });
        console.log("------------------------------------");
        console.log(user);
      } else {
        this.setState({ isLoggedIn: false, user: {} });
      }
    });
  }

  postNewComment(comment) {
    comment.user = {
      uid: this.state.user.uid,
      name: this.state.user.displayName
    };
    const comments = {
      ...this.state.comments
    };
    const timestamp = Date.now();
    comments[`comm-${timestamp}`] = comment;
    this.setState({
      comments: comments
    });
  }

  auth(provider) {
    this.props.auth.signInWithPopup(this.props.providers[provider]);
  }
  render() {
    return (
        <Container id="comments">
          <h1>Comments</h1>
        {this.state.isLoggedIn && (
          <div>
            <Row>
              <Col sm={4}><Image src={this.state.user.photoURL} roundedCircle /></Col>
              <Col sm={8}>
                Name:  {this.state.user.displayName} <br/>
                Email: {this.state.user.email} <br/><br/>
                <NewComment postNewComment={this.postNewComment} /><br/>
                <Button variant="primary"  onClick={() => this.props.auth.signOut()}>Sign Out</Button>
              </Col>
            </Row>
          </div>

          )}
          {!this.state.isLoggedIn && (
            <div>
              <h6> Please sign in first to comment</h6>
              <Button variant="danger" onClick={(s) => this.auth("google")}>Sign in by Google</Button>
            </div>

          )}

          <Comments comments={this.state.comments} />

        </Container>
    );
  }
}

export default CommentBox;
