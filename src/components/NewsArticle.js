import React, { Component } from "react";

export default class NewsArticle extends Component {
  handleLike = () => {
    this.props.increaseLikes(this.props.title);
  };

  handleDislike = () => {
    this.props.decreaseLikes(this.props.title);
  };

  render() {
    return (
      <div className="newsarticle">
        <h2>{this.props.title}</h2>
        <p className="alignleft">{this.props.description}</p>
        <p>{this.props.likes}</p>
        <button onClick={this.handleLike}>Like</button>
        <button onClick={this.handleDislike}>Dislike</button>
      </div>
    );
  }
}
