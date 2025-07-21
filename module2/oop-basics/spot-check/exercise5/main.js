class Vehicle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    Vehicle.carsSold++;
  }

  static getInfo() {
    console.log("We've sold " + Vehicle.carsSold + " vehicles.");
  }

  static calculateMoney() {
    console.log(Vehicle.carsSold * 30000);
  }
}
Vehicle.carsSold = 0;

const c1 = new Vehicle(1, 2, 3);
const c2 = new Vehicle(4, 5, 6);
const c3 = new Vehicle(7, 8, 9);

Vehicle.getInfo();
Vehicle.calculateMoney();
