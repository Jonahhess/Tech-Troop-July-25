const {
  add,
  calculateHyp,
  removeBugs,
  clearLowPriority,
  PictureManager,
  ArrayManipulator,
} = require("./someFile.js");

test("add should return sum of a + b", () => {
  let sum = add(1, 2);
  expect(sum).toBe(3);
});

test("should return hyp length of 3^2 + 4^2", () => {
  let hyp = calculateHyp(3, 4);
  expect(hyp).toBe(5);
});

test("should remove bugs from code", () => {
  let code = [
    "great code",
    "good code",
    "BUG",
    "async await awesome code",
    "BUG",
    "BUG",
    "general code",
  ];
  let bugFreeCode = removeBugs(code);
  expect(bugFreeCode).not.toContain("BUG");
  expect(bugFreeCode).toContain("good code");
});

test("should contain only high priority", () => {
  let objArr = ["LOW", "apples", "HIGH", "HIGH", "LOW"];
  let highOnly = clearLowPriority(objArr);
  highOnly.forEach((element) => {
    expect(element).toBe("HIGH");
  });
});

test("addPicture should add a picture URL to the pictureURLs array", function () {
  //sanity
  const picManager = new PictureManager();
  expect(picManager.pictureURLs.length).toBe(0);

  picManager.addPicture("some_url");
  expect(picManager.pictureURLs.length).toBe(1); //test
  expect(picManager.pictureURLs).toContain("some_url"); //double check
});

test("removePicture should throw on negative value", () => {
  const picManager = new PictureManager();
  expect(picManager.pictureURLs.length).toBe(0);

  picManager.removePicture("hell");
  expect(picManager.pictureURLs);
});

test("ArrayManipulator should zip arrays of same length", () => {
  const zip = new ArrayManipulator();
  const arr1 = ["a", "b", "c"];
  const arr2 = [1, 2, 3];
  const zipped = zip.manipulate(arr1, arr2);
  const expected = { a: 1, b: 2, c: 3 };
  expect(zipped).toEqual(expected);
});

test("ArrayManipulator should not zip arrays of different length", () => {
  const zip = new ArrayManipulator();
  const arr1 = ["a", "b", "c"];
  const arr2 = [1, 2, 3, 4];
  const zipped = zip.manipulate(arr1, arr2);
  const expected = -1;
  expect(zipped).toEqual(expected);
});

test("ArrayManipulator should zip arrays of same length", () => {
  const zip = new ArrayManipulator();
  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, 2, 3, 4];
  const zipped = zip.manipulate(arr1, arr2);
  const expected = { 1: 1, 2: 2, 3: 3, 4: 4 };
  expect(zipped).toEqual(expected);
});
