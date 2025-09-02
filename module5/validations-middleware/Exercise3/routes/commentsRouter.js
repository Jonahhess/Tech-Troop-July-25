const express = require("express");
const { body, validationResult } = require("express-validator");

const {
  getComments,
  getCommentById,
  addComment,
} = require("../controllers/commentsController.js");
const router = express.Router();

router.get("/", getComments);
router.get("/:id", getCommentById);

router.post(
  "/",
  body("content").isLength({ min: 5, max: 500 }),
  body("email").isEmail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  addComment
);

module.exports = router;
