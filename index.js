// index.js

// Define the Car constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Add the getDescription method to the Car prototype
Car.prototype.getDescription = function () {
  return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

// Define the ElectricCar constructor function as a subclass of Car
function ElectricCar(make, model, year, range) {
  Car.call(this, make, model, year); // Call the Car constructor to set inherited properties
  this.range = range;
}

// Set up the prototype chain for ElectricCar
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

// Override the getDescription method of the Car prototype for ElectricCar
ElectricCar.prototype.getDescription = function () {
  const carDescription = Car.prototype.getDescription.call(this); // Call the parent method
  return `${carDescription}, Range: ${this.range} miles`;
};

// Create an instance of ElectricCar and call getDescription on it
const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(myElectricCar.getDescription());
