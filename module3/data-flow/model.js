import view from "./view.js";

const handler = {
  set(target, property, value) {
    target[property] = value;
    view.render();
  },
  deleteProperty(target, prop) {
    if (prop in target) {
      delete target[prop];
      view.render();
    }
  },
};
const _model = {};
const model = new Proxy(_model, handler);
export default model;
