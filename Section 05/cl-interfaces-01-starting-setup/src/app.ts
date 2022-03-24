class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('d1', []);
const IT = new ITDepartment('d2', ['max']);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.addReport('something went wrong');

// accounting.employees[2] = 'Anna';

console.log(accounting);
console.log(IT);

accounting.describe();
IT.describe();
accounting.printEmployeeInfo();
accounting.printReports();

// const accountingCopy = { name: 'Accounting 2', describe: accounting.describe };

// accountingCopy.describe();
