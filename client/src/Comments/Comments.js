import React, { Component } from "react";

import Comment from "./Comment";

class Comments extends Component {
  renderComment(key, comment) {
    return <div><Comment key={key} comment={comment} /><br/></div>;
  }
  render() {
    return (
      <div>
        <br/>
        {Object.keys(this.props.comments).map(key =>
          this.renderComment(key, this.props.comments[key])
        )}
        <br/>
      </div>
    );
  }
}

export default Comments;