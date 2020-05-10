// If department has any abstract methods 
abstract class Department {
  // private readonly id: string;
  // private name: string;
  // private employees: string[] = [];
  protected employees: string[] = [];
  static fiscalYear = 2020

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
    // console.log("From Constructor:" + Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return {
      name: name
    };
  }

  // This means that this method must be defined in any class extended by Department class
  abstract describe(this: Department): void; 

  addEmployee(employee: string) {
    // this.id = 2;
    this.employees.push(employee);
  }

  printemployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    // this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }

  // addEmployee(text: string) {
  //   this.employees.push("From IT Class" + text);
  // }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  static getInstance() {
    if(this.instance) { // or we can write AccountingDepartment.instance
      return this.instance;
    }

    this.instance = new AccountingDepartment('D2', []);
    return this.instance;
  }
  get mostRecentReport(): string {
    if(this.lastReport) {
      return this.lastReport
    }

    throw new Error("No report found!!");
  }

  set mostRecentReport(value: string) {
    // this.lastReport = value;
    if(!value) {
      throw new Error("Please proper a report");
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if(name === "Prateek") {
      return;
    }

    this.employees.push(name); // This can be access inside Department if it is private.
  }

  addReports(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }
}

// As this is abstract so you can not create an instance of it 
// const dept = new Department("D", "Department");

// Static 
const employee1 = Department.createEmployee("Prateek");
// console.log(employee1);
// console.log(Department.fiscalYear);


// IT Department
const it = new ITDepartment("D1", ["Prateek"]);
console.log(it);
it.describe();
it.addEmployee("Prateek");
it.addEmployee("Menu")
it.addEmployee("Nirvan")
// it.employees[2] = "Iteesha";
// it.printemployeeInformation();

// const itCopy = {
//   name: 'DUMMY',
//   describe: it.describe
// };
// it.describe();


// Accounting
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
accounting2.mostRecentReport = "Test123";
console.log(accounting);
console.log(accounting2);

// accounting.addReports("Something went wrong!!");
accounting.mostRecentReport = "Something went wrong!!";
// console.log(accounting.mostRecentReport);

// accounting.printReports();
// accounting.printemployeeInformation();
accounting.describe();
accounting.addEmployee("Iteesha");
accounting.addEmployee("Prateek");
console.log(accounting);