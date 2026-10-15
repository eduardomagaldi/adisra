class Car {
  constructor(chassisNumber, engineNumber, productionCost) {
    this.chassisNumber = chassisNumber
    this.engineNumber = engineNumber
    this.productionCost = productionCost
  }
}

class FlexCar extends Car {
  constructor(
    chassisNumber,
    engineNumber,
    productionCost,
    doorCount,
    cylinderCapacity
  ) {
    super(chassisNumber, engineNumber, productionCost)
    this.doorCount = doorCount
    this.cylinderCapacity = cylinderCapacity
  }
}

class DieselCar extends Car {
  constructor(
    chassisNumber,
    engineNumber,
    productionCost,
    loadCapacity,
    dumpVolume
  ) {
    super(chassisNumber, engineNumber, productionCost)
    this.loadCapacity = loadCapacity
    this.dumpVolume = dumpVolume
  }
}

class ElectricCar extends Car {
  constructor(
    chassisNumber,
    engineNumber,
    productionCost,
    power,
    batteryDuration
  ) {
    super(chassisNumber, engineNumber, productionCost)
    this.power = power
    this.batteryDuration = batteryDuration
  }
}

const flex = new FlexCar('CH001', 'MOT-F1', 45000, 4, 1.0)
const diesel = new DieselCar('CH002', 'MOT-D1', 80000, 1500, 2.5)
const electric = new ElectricCar('CH003', 'MOT-E1', 120000, 150, 400)

console.log(flex)
console.log(diesel)
console.log(electric)
