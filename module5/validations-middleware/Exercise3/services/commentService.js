const comments = require("../models/commentModel.js");

function getComments(postId) {
  return comments.filter((comment) => comment.postId === postId);
}

function getCommentById(postId, commentId) {
  return comments.find(
    (comment) => comment.id === commentId && comment.postId === postId
  );
}

function addComment(postId, comment) {
  comments.push({ ...comment, postId });
}
module.exports = { getComments, getCommentById, addComment };
