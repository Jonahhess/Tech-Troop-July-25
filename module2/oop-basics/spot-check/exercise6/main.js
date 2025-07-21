class Vehicle {
  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this._fuel = fuel;
    Vehicle.carsSold++;
  }

  static getInfo() {
    console.log("We've sold " + Vehicle.carsSold + " vehicles.");
  }

  static calculateMoney() {
    console.log(Vehicle.carsSold * 30000);
  }

  get fuel() {
    return this._fuel;
  }

  set fuel(fuel) {
    return fuel >= 0 && fuel <= 150 ? (this._fuel = fuel) : undefined;
  }
}
Vehicle.carsSold = 0;

const c1 = new Vehicle(1, 2, 3);
const c2 = new Vehicle(4, 5, 6);
const c3 = new Vehicle(7, 8, 9);
c3.fuel = 150;
console.log(c3);

Vehicle.getInfo();
Vehicle.calculateMoney();
