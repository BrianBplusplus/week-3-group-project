import React from "react";
import "./App.css";
// import NewsFeed from "./components/NewsFeed";
import UserSubmit from "./components/UserSubmit";
import NewsFeed from "./components/NewsFeed";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="newsfeedHeader">DILIP BRIAN NEWSFEED APP</h1>
      </header>
      <NewsFeed />
      {/* <div className="right"></div> */}
      <UserSubmit />
      <footer>This will be the footer</footer>
    </div>
  );
}

export default App;
