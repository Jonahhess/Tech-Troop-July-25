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
  const tooManyArgs = Ex1.isEven(undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  expect(isEven).toBe(true);
  expect(isOdd).toBe(false);
  expect(isUndefined).toBe(false);
  expect(tooManyArgs).toBe(false);
});

test("should return correct values for ", () => {
  const Ex1 = new Exercises();
  const isEven = Ex1.isEven(2);
  const isOdd = Ex1.isEven(1);
  const isUndefined = Ex1.isEven();
  const tooManyArgs = Ex1.isEven(undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  expect(isEven).toBeTruthy();
  expect(isOdd).toBeFalsy();
  expect(isUndefined).toBeFalsy();
  expect(tooManyArgs).toBeFalsy();
});
