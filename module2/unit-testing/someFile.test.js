const {
  add,
  calculateHyp,
  removeBugs,
  clearLowPriority,
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
