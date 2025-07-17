const add = require("./someFile.js");

test("add should return sum of a + b", () => {
  let sum = add(1, 2);
  expect(sum).toBe(3);
});
