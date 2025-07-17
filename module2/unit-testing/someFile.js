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

class ArrayManipulator {
  manipulate(arr1, arr2) {
    if (arr1.length !== arr2.length) return -1;
    const obj = {};
    for (let i = 0; i < arr1.length; i++) {
      obj[arr1[i]] = arr2[i];
    }
    return obj;
  }
}

module.exports = {
  add,
  calculateHyp,
  removeBugs,
  clearLowPriority,
  PictureManager,
  ArrayManipulator,
};
