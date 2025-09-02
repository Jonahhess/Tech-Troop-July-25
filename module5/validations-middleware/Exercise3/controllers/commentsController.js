const commentService = require("../services/commentService.js");
let commentCounter = 0;

function getComments(req, res) {
  const comments = commentService.getComments(req.params.postId);
  res.status(200).json(comments);
}

function getCommentById(req, res) {
  const comment = commentService.getCommentById(
    req.params.postId,
    req.params.commentId
  );
  comment
    ? res.status(200).json(comment)
    : res.status(404).json({ error: "Unknown comment id" });
}

function addComment(req, res) {
  const id = ++commentCounter;
  const date = Date.now();
  commentService.addComment(req.params.postId, { ...req.body, id, date });
  res.status(201).end();
}

module.exports = { getComments, getCommentById, addComment };
