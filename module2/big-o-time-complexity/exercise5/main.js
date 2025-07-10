// find duplicates
const findDuplicates = (arr) => {
  const setSize = new Set(arr).size;
  const arrLen = arr.length;
  return setSize !== arrLen;
};

// using own code
const findDuplicates2 = (arr) => {
  return !Object.values(
    arr.reduce((obj, cur) => {
      cur in obj ? (obj[cur] += 1) : (obj[cur] = 1);
      return obj;
    }, {})
  ).every((v) => v === 1);
};

const findDuplicates3 = (arr) => {
  const obj = {};

  for (const element of arr) {
    if (element in obj) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  }

  for (const value of Object.values(obj)) {
    if (value > 1) {
      return true;
    }
  }
  return false;
};

const tests = [[1, 2, 3, 4], [1, 1], [], [1, 2, 3, 1]];

for (const test of tests) {
  if (findDuplicates(test)) {
    console.log("there was a duplicate1");
  }
  if (findDuplicates2(test)) {
    console.log("there was a duplicate2");
  }

  if (findDuplicates3(test)) {
    console.log("there was a duplicate3");
  }
}
