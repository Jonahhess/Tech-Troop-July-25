const rollDice = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const roll = Math.random();
      if (roll <= 0.1) reject("dice fell off the table");
      resolve(`Roll: '${roll}`);
    }, 500)
  );

rollDice()
  .then((data) => console.log(data))
  .catch((data) => console.log(data));
