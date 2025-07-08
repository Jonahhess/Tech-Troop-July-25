const isEven = function (number) {
  return !(number % 2);
};

const printOddNumbers = function (array) {
  if (!Array.isArray(array)) {
    return;
  }

  return array
    .filter((element) => !isEven(element))
    .forEach((element) => {
      console.log(element);
    });
};
