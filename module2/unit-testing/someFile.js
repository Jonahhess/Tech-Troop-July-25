const add = (a, b) => a + b;
const calculateHyp = (a, b) => Math.sqrt(a * a + b * b);
const removeBugs = (code) => code.filter((c) => c != "BUG");
const clearLowPriority = (objArr) =>
  objArr.filter((obj) => obj.priority === "HIGH");

class PictureManager {
  constructor() {
    this.pictureURLs = [];
  }

  addPicture(picURL) {
    this.pictureURLs.push(picURL);
  }

  removePicture(picURL) {
    this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1);
  }
}

module.exports = PictureManager;

module.exports = {
  add,
  calculateHyp,
  removeBugs,
  clearLowPriority,
  PictureManager,
};
