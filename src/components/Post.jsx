import React, { useState, useEffect } from "react";

const Post = ({ post }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${post.userId}`
        );
        const data = await response.json();
        setAuthor(data);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    fetchAuthor();
  }, [post.userId]);

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Author: {author.name}</p>
      <hr />
    </div>
  );
};

export default Post;
