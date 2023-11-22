/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
        this.currentSpeed = 0;
    }
    accelerate() {
        this.currentSpeed++;
    } brake() {
        this.currentSpeed--;
    }
    toString() {
        console.log(`The ${this.make} ${this.model} is running at ${this.currentSpeed} MPH!`);
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const delorean = new Car('DeLorean','DMC-12');
delorean.accelerate();
delorean.accelerate();
delorean.brake();
delorean.toString();
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car{
    constructor(model){
        super('Prius')
    }
    toString() {
        return `This electrified ${super.toString()}`;
    }
};
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const jetsons = new ElectricCar('JetsonsMobile');
jetsons.accelerate();
jetsons.accelerate();
jetsons.brake();
jetsons.toString();