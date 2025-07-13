// brute force - 2 sum

const arr = [1, 5, 5, 2];
const target = 10;

function twoSum1(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

function twoSum2(arr) {
  const obj = {};
  for (const element of arr) {
    if (element in obj) {
      return true;
    } else {
      obj[target - element] = 0;
    }
  }
  return false;
}

function twoSum3(arr, target) {
  arr.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    const sum = arr[p1] + arr[p2];
    if (sum === target) {
      return true;
    } else if (sum > target) {
      p2--;
    } else {
      p1++;
    }
  }
  return false;
}

function twoSum4(arr) {
  const map = new Map();
  for (const element of arr) {
    if (map.has(element)) {
      return true;
    } else {
      map.set(target - element, 0);
    }
  }
  return false;
}

// set version
// space
//

function twoSum5(arr, target) {
  const set = new Set();
  for (const element of arr) {
    if (set.has(element)) {
      return true;
    } else {
      set.add(target - element);
    }
  }
  return false;
}

console.log(twoSum5(arr, target));
