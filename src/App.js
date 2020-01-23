import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import UserSubmit from "./components/UserSubmit";
import NewsFeed from "./components/NewsFeed";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="newsfeedHeader">DILIP BRIAN NEWSFEED APP</h1>
      </header>
      <Route exact path="/" component={NewsFeed} />
      <Route path="/details/" component={DetailsPage} />
      <Route path="/details" component={UserSubmit} />
      <footer>This will be the footer</footer>
    </div>
  );
}

export default App;
