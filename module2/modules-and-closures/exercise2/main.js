// Create a Bank module. It should have a variable and two functions:

// A private money variable which starts off at 500
// A depositCash function which takes a cash parameter and uses it to increase money
// A checkBalance function which logs the money

const Bank = function () {
  let _money = 500;
  // NOTE: Classes have #var notation, which makes variables private without the need for closures.
  const depositCash = function (cash) {
    _money += cash > 0 ? cash : 0;
  };
  const checkBalance = function () {
    console.log(`Your balance is ${_money}`);
  };

  return {
    deposit: depositCash,
    showBalance: checkBalance,
  };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950
