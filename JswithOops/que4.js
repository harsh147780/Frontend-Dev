class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }


    work() {
        return `${this.name} manages the ${this.department} team and oversees projects.`;
    }
}


const e1 = new Employee("Akshat", "Sales");
const e2 = new Employee("akhi", "Finance");
const m1 = new Manager("Sneha", "IT");


const workers = [e1, e2, m1];

workers.forEach(emp => {
    console.log(emp.work());
});