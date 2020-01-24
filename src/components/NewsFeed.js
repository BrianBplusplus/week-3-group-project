import React from "react";
import { Component } from "react";
import NewsArticle from "./NewsArticle";
import "../App.css";

class NewsFeed extends Component {
  state = {
    newsArticles: []
  };

  componentDidMount() {
    const api_key = "41f62212190b4ef68512cf121cfc796b";
    const article_language = "us";
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${article_language}&apiKey=${api_key}`
    )
      .then(response => response.json())
      .then(news => {
        const likeNews = news.articles.map(article => {
          const likecount = Math.floor(Math.random() * 6);
          return { ...article, likes: likecount };
        });
        this.setState({
          newsArticles: likeNews
        });
      })
      .catch(err => {
        console.warn("error", err);
      });
  }

  increaseLikes = title => {
    const likedData = this.state.newsArticles.map(article => {
      if (article.title === title) {
        return { ...article, likes: article.likes + 1 };
      } else {
        return article;
      }
    });
    this.setState({
      newsArticles: likedData
    });
  };

  decreaseLikes = title => {
    const likedData = this.state.newsArticles.map(article => {
      if (article.title === title && article.likes > 0) {
        return { ...article, likes: article.likes - 1 };
      } else {
        return article;
      }
    });
    this.setState({
      newsArticles: likedData
    });
  };

  render() {
    const articles_copy = [...this.state.newsArticles];
    articles_copy.sort((a, b) => b.likes - a.likes);
    console.log("articles copy", articles_copy);
    return (
      <div>
        {articles_copy.slice(0, 5).map((item, index) => {
          return (
            <NewsArticle
              key={index}
              title={item.title}
              description={item.description}
              likes={item.likes}
              increaseLikes={this.increaseLikes}
              decreaseLikes={this.decreaseLikes}
            />
          );
        })}
      </div>
    );
  }
}

export default NewsFeed;
