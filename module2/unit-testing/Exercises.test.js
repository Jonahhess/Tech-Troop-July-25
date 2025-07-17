const Exercises = require("./Exercises");

test("should create an instance of Exercises", () => {
  const Ex1 = new Exercises();
  expect(Ex1).toBeInstanceOf(Exercises);
});

test("isEven test suite", () => {
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

test("removeAtLeastOne test suite", () => {
  const Ex1 = new Exercises();

  const invalidInputs = [undefined, null, {}, 1, 0, -1, "hello", ""];
  invalidInputs.forEach((element) => {
    expect(() => Ex1.removeAtLeastOne(element)).toThrow();
  });

  const edgeCases = [[], [1]];
  edgeCases.forEach((element) => {
    expect(() => Ex1.removeAtLeastOne(element)).toHaveLength(0);
  });

  const expectedCases = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
  ];
  expectedCases.forEach((element) => {
    expect((() => Ex1.removeAtLeastOne(element)).length).toBeLessThan(
      element.length
    );
  });
});

// new

test("validate test suite", () => {
  const Ex1 = new Exercises();

  const invalidInputs = [
    undefined,
    null,
    {},
    1,
    0,
    -1,
    "hello",
    "",
    [{}, {}, {}],
    [[], [], []],
    { name: [] },
    [0],
    [1],
    [],
  ];
  invalidInputs.forEach((element) => {
    let invalid = Ex1.validate(element);
    expect(invalid).toEqual({
      error: "Need at least one boolean",
    });
  });

  const failingEdgeCases = [[false], [true, false], [false, true]];

  failingEdgeCases.forEach((element) => {
    let failingEdgeCase = Ex1.validate(element);
    expect(failingEdgeCase).toBeFalsy();
  });

  const passingEdgeCases = [[true]];
  passingEdgeCases.forEach((element) => {
    let passingEdgeCase = Ex1.validate(element);
    expect(passingEdgeCase).toBeTruthy();
  });

  const expectedCases = [
    [true, true, true],
    [true, true, false],
    [true, true],
  ];
  expectedCases.forEach((element) => {
    let expectedCase = Ex1.validate(element);
    expect(expectedCase).toBeTruthy();
  });
});
