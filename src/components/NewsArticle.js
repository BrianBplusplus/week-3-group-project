import React, { Component } from "react";

export default class NewsArticle extends Component {
  // console.log(props);
  state = {
    likes: 0
  };

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  addDislike = () => {
    if (this.state.likes > 0) {
      this.setState({
        likes: this.state.likes - 1
      });
    }
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>{this.state.likes}</p>
        <button onClick={this.addLike}>Like</button>
        <button onClick={this.addDislike}>Dislike</button>
      </div>
    );
  }
}
