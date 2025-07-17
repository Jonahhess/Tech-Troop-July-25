const Exercises = require("./Exercises");

test("should create an instance of Exercises", () => {
  const Ex1 = new Exercises();
  expect(Ex1).toBeInstanceOf(Exercises);
});

test("should return correct values for ", () => {
  const Ex1 = new Exercises();
  const isEven = Ex1.isEven(2);
  const isOdd = Ex1.isEven(1);
  const isUndefined = Ex1.isEven();
  expect(isEven).toBe(true);
  expect(isOdd).toBe(false);
  expect(isUndefined).toBe(false);
});
