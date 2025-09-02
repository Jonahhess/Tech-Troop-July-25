const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const { postSchema } = require("../schemas/postSchema");

const ajv = new Ajv();
addFormats(ajv);
const validatepost = ajv.compile(postSchema);

function postValidation(req, res, next) {
  const valid = validatepost(req.body);
  if (valid) {
    next();
  } else {
    console.log(validatepost.errors);
    const error = new Error("post validation error");
    error.status = 400;
    error.message = validatepost.errors[0].message;
    next(error);
  }
}

module.exports = { postValidation };
