import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

class NewsFeed extends Component {
  render() {
    return (
      <div className="newsitem">
        <h2>{this.props.heading}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

NewsFeed.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string
};

NewsFeed.defaultProps = {
  heading: "This needs to be the headline",
  description: "Description goes here"
};

export default NewsFeed;
