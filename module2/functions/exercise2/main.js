const printOddNumbers = function (array) {
  if (!Array.isArray(array)) {
    return;
  }

  return array
    .filter((element) => element % 2)
    .forEach((element) => {
      console.log(element);
    });
};
