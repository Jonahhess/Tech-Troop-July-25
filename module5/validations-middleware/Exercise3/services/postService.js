const posts = require("../models/postModel.js");

function getPosts() {
  return posts;
}

function getPostById(id) {
  return posts.find((post) => post.id == id);
}

function addPost(post) {
  posts.push(post);
}
module.exports = { getPosts, getPostById, addPost };
