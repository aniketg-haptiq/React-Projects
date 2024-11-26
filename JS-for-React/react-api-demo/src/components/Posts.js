import React, { useState, useEffect } from "react";
import { getPosts, deletePost } from "../services/postService";
import PostForm from "./PostForm";

export default function Posts() {
  const [posts, setPosts] = useState([]); //create state to store posts fetched from api by getPost

  useEffect(() => {
    //load posts from api inside state
    getPosts() // (send http req to api) - (return Promise), response
      .then((result) => {
        setPosts(result.data);
      }) //then get posts data as result from api and sen into state
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    // setPosts(posts.filter(post => post.id !== id));   //delete immediately
    deletePost(id)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Posts</h1>
      <PostForm posts={posts} setPosts={setPosts}></PostForm>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
