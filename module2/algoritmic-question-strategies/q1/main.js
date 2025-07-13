const array = [1, 2, 3, 4, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function printDuplicates2(array) {
  const map = new Map();
  for (const item of array) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (const [key, value] of map) {
    if (value > 1) {
      console.log(key);
    }
  }
}

printDuplicates2(array);
