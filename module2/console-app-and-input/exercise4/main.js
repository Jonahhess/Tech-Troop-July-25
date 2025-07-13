const BankUser = require("./BankUser.js");
const promptSync = require("prompt-sync");

const bankUser = new BankUser();
const prompt = promptSync();

while (true) {
  let input = prompt(
    "=== Banking System ===\n1) Check Balance\n2) Deposit Money\n3) Withdraw Money\n4) Exit\nChoose option (1-4):"
  );

  if (input === "4") {
    console.log("Goodbye!");
    return;
  }

  if (input == 1) {
    bankUser.CheckBalance();
    continue;
  }

  if (input !== "2" && input !== "3") {
    console.log("Wrong input. Try again\n");
    continue;
  }
  let num = prompt("Enter Amount: ");
  if (input === "2") {
    bankUser.DepositMoney(Number(num));
    continue;
  }

  if (input === "3") {
    bankUser.WithdrawMoney(Number(num));
  }
}
