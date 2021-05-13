// class Vehicle {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     honk() {
//         console.log('Beep!')
//     }

//     toString() {
//         console.log(`This ride is super fresh it is my ${this.make} ${this.model} and is definitely the best ever`)

//     }

// }
// const myRide = new Vehicle('SuperCharged', 'Lambo', 2099)

// console.log(myRide.toString())


// class Car extends Vehicle {
//     constructor(make, model, year){
//         super(make, model, year);
//         this.numWheels = 4;
//     }


// }

// class Motorcycle extends Vehicle {
//     consturctor(make, model, year){
//         super(make, model, year);
//         this.numWheels = 2;
//     }

//     revEngine(){
//         return 'VROOM!!'
//     }
// }


class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }

}
