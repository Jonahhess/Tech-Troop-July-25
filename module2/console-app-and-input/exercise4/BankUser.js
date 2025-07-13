class BankUser {
  #balance;
  constructor(balance = 0) {
    this.#balance = balance;
  }

  CheckBalance() {
    console.log(this.#balance);
  }

  DepositMoney(num) {
    if (typeof num === "number" && num > 0) {
      this.#balance += num;
    }
  }
  WithdrawMoney(num) {
    if (typeof num === "number" && num > 0 && this.#balance >= num) {
      this.#balance -= num;
    }
  }
}

module.exports = BankUser;
