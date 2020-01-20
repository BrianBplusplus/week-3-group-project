import React from "react";
import "./App.css";
import NewsFeed from "./components/NewsFeed";
import UserSubmit from "./components/UserSubmit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="newsfeedHeader">DILIP BRIAN NEWSFEED APP</h1>
      </header>
      <div class="left">
        <NewsFeed
          heading={"Bananas are awesome!"}
          description={"They are usually very yellow"}
        />
        <NewsFeed />
        <NewsFeed />
      </div>
      <div className="right">
        <NewsFeed />
        <NewsFeed />
        <NewsFeed />
      </div>
      <UserSubmit />
      <footer>This will be the footer</footer>
    </div>
  );
}

export default App;
