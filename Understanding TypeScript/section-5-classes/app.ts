class Department {
  // private readonly id: string;
  //   public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInforamtion() {
    console.log(this.employees.length);
  }
}

class ITdepartment extends Department {
  constructor(id: string, admins: string[]) {
    super(id, "IT");
  }
}

// const accounting = new Department("Accounting");

// accounting.describe();

// const accountingCopy = { name: "s", describe: accounting.describe };

// accountingCopy.describe();
