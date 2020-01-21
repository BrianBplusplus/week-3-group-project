import React from "react";
import { Component } from "react";
// import PropTypes from "prop-types";
import NewsArticle from "./NewsArticle";

const trump = "rotterdam";

class NewsFeed extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/everything?q=${trump}&from=2019-12-21&sortBy=publishedAt&apiKey=41f62212190b4ef68512cf121cfc796b`
    )
      .then(response => response.json())
      .then(news => {
        const newsList = news.articles.map((item, index) => {
          return (
            <NewsArticle
              key={index}
              title={item.title}
              description={item.description}
            />
          );
        });
        this.setState({
          data: newsList.slice(0, 9)
        });
      })
      .catch(err => {
        console.warn("error", err);
      });
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}

export default NewsFeed;
