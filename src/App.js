import React from "react";
import "./styles.css";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Recent Posts</h1>
      </header>
      <PostList />
    </div>
  );
};

export default App;
