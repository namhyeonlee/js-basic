class Vehicle {
    constructor(name, wheel) {
        this.name = name
        this.wheel = wheel
    }
}
const myVehicle = new Vehicle('운송수단', 2)


class Bicycle extends Vehicle {

    //bicycle라는 클라스에서 vehicle 클라스를 확장해서 사용하겠다는 개념 

    constructor(name, wheel) {
        //super => vehicle
        super(name, wheel)
    }
}

const myBicycle = new Bicycle()
class Car extends Vehicle {

    constructor(name, wheel, icense) {

        super(name, wheel)
        this.license = license
    }
}