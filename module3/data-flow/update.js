import model from "./model.js";

const update = {
    init: () => {
        return model;
    },
    add: () => (name, text) {
        model[name] = text;
        return model;
    },
    remove: (name) => {
        delete model[name];
        return model;
    }
}

export default update;
