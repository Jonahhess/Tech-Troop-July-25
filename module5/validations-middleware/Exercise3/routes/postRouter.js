const express = require("express");
const commentsRouter = require("./commentsRouter");

const {
  getPosts,
  getPostById,
  addPost,
} = require("../controllers/postsController.js");
const { postValidation } = require("../middlewares/postValidation.js");
const postService = require("../services/postService.js");
const router = express.Router();

const postExists = (req, res, next) => {
  if (!postService.getPostById(req.params.postId)) {
    throw { status: 400, message: "bad request" };
  }
  next();
};
router.use("/:postId/comments", postExists, commentsRouter);

router.get("/", getPosts);
router.post("/", postValidation, addPost);
router.get("/:postId", getPostById);

module.exports = router;
