function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (num > 0 ? resolve(num) : reject(num)));
  }, 800)
    .then((num) => (num % 7 === 0 ? "Lucky!" : "Not lucky"))
    .then((res) => console.log(res))
    .catch(() => {
      throw new Error("Invalid number");
    });
}
