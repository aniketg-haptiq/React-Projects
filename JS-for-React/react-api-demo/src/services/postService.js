import axios from "axios";

const api = axios.create({
  ///create axios instance
  baseUrl: "https://jsonplaceholder.typicode.com",
});

const getPosts = () => {
  api.get("/posts");
}; //.get() method to getting the data(posts), return function
const deletePost = (id) => api.delete(`/posts/${id}`); //to delete pots
const createPost = (post) => api.post("/posts", post); //to creating post

export { getPosts, deletePost, createPost };
