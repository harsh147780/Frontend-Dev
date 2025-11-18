function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name: " + this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log("Branch: " + this.branch);
};

let s1 = new Student("Harsh", "CSE");

s1.showName();
s1.showBranch();

console.log(s1.__proto__);
console.log(s1.__proto__.__proto__);
