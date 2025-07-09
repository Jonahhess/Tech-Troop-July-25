const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 5 },
    doubleShot: { beanRequirement: 15, price: 5 },
    frenchPress: { beanRequirement: 12, price: 5 },
  },

  makeDrink: function (drinkType) {
    if (!(drinkType in this.drinkRequirements)) {
      console.log(`Sorry, we don't make ${drinkType}`);
      return false;
    }

    if (this.beans < this.drinkRequirements[drinkType].beanRequirement) {
      console.log("Sorry, we're all out of beans!");
      return false;
    }

    this.beans -= this.drinkRequirements[drinkType].beanRequirement;
    return true;
  },
  money: 10,

  buyBeans: function (numBeans) {
    if (this.money >= numBeans) {
      this.money -= numBeans;
      this.beans += numBeans;
    } else {
      console.log("No more money...");
    }
  },

  sellDrink: function (drinkType) {
    if (this.makeDrink(drinkType)) {
      this.money += this.drinkRequirements[drinkType].price;
    }
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
coffeeShop.buyBeans(5); // fine
coffeeShop.buyBeans(5); // fine
coffeeShop.buyBeans(5); // "no more money..."
coffeeShop.sellDrink("latte");
coffeeShop.buyBeans(5); // fine
coffeeShop.buyBeans(1); // "no more money..."
