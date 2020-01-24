import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DetailsPage extends Component {
  state = {
    article: {}
  };
  componentDidMount() {
    const api_key = "41f62212190b4ef68512cf121cfc796b";
    const article_language = "us";
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${article_language}&apiKey=${api_key}`
    )
      .then(response => response.json())
      .then(news => {
        const NewsItem = news.articles[0];
        this.setState({
          article: NewsItem
        });
      })
      .catch(err => {
        console.warn("error", err);
      });
  }

  render() {
    console.log(this.state.article);
    const { title, author, urlToImage, url, content } = this.state.article;

    return (
      <div>
        <p>This is the details page</p>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <img src={urlToImage} />
        <p>{content}</p>
        <a href={url}>Go to source</a>
        <Link to="/"> Go to Home screen</Link>
      </div>
    );
  }
}
