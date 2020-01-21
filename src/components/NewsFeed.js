import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

class NewsFeed extends Component {
  state = {
    title: "",
    description: ""
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-21&sortBy=publishedAt&apiKey=41f62212190b4ef68512cf121cfc796b"
    )
      .then(response => response.json())
      .then(news => {
        console.log(news);
        this.setState({
          title: news.articles[0].title,
          description: news.articles[0].description
        });
      })
      .catch(err => {
        console.warn("error", err);
      });
  }

  render() {
    //console.log("checkcing this.state", this.state);
    return (
      <div className="newsitem">
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
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
