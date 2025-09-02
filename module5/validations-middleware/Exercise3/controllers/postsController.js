const postService = require("../services/postService.js");
let postCounter = 0;

function getPosts(req, res) {
  const posts = postService.getPosts();
  res.status(200).json(posts);
}

function getPostById(req, res) {
  const post = postService.getPostById(req.params.postId);
  post
    ? res.status(200).json(post)
    : res.status(404).json({ error: "Unknown post id" });
}

function addPost(req, res) {
  const id = ++postCounter;
  const date = Date.now();
  const { text, title } = req.body;
  const newpost = postService.addPost({ id, date, text, title });
  res.status(201).json(newpost);
}

module.exports = { getPosts, getPostById, addPost };
