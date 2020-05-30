type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Prateek",
  privileges: ["create-server"],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Accept only number

function add(a: Combinable, b: Combinable) {
  if(typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printemployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if('privileges' in emp) {
    console.log(emp.privileges);
  }
  
  if('startDate' in emp) {
    console.log(emp.startDate);
  }
}

printemployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a Truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const car = new Car();
const truck = new Truck();

function userVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if('loadCargo' in vehicle) {
    if(vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

userVehicle(car);
userVehicle(truck);