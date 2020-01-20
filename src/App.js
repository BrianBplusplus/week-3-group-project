import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NewsFeed from "./components/NewsFeed";
import UserSubmit from "./components/UserSubmit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="newsfeedHeader">DILIP BRIAN NEWSFEED APP</div>
      </header>
      <NewsFeed heading={""} description={""} />
      <NewsFeed heading={""} description={""} />
      <NewsFeed heading={""} description={""} />
      <NewsFeed heading={""} description={""} />
      <NewsFeed heading={""} description={""} />
      <NewsFeed heading={""} description={""} />
      <UserSubmit />
      <footer>This will be the footer</footer>
    </div>
  );
}

export default App;
