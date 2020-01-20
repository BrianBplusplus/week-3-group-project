import React from "react";
import "./App.css";
import NewsFeed from "./components/NewsFeed";
import UserSubmit from "./components/UserSubmit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="newsfeedHeader">DILIP BRIAN NEWSFEED APP</div>
      </header>
      <NewsFeed
        heading={"Bananas are awesome!"}
        description={"They are usually very yellow"}
      />
      <NewsFeed />
      <NewsFeed />
      <NewsFeed />
      <NewsFeed />
      <NewsFeed />
      <UserSubmit />
      <footer>This will be the footer</footer>
    </div>
  );
}

export default App;
