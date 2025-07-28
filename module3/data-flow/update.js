import model from "./model.js";

const update = {
  init: () => {
    return model;
  },
  add: (name, text) => {
    return model.set(name, text);
  },
  remove: (name) => {
    return model.delete(name);
  },
};

export default update;
