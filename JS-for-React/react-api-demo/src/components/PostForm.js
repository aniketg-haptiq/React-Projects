import React, { useState } from "react";
import { createPost } from "../services/postService";

export default function PostForm({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addPost = () => {
    createPost({ title, body })
      .then((response) => {
        setPosts([...posts, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addPost();
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Title</div>
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button type="submit">Add Post</button>
      </div>
    </form>
  );
}
