class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    
    calculateAverage() {
        if (this.marks.length === 0) return 0;

        const sum = this.marks.reduce((acc, val) => acc + val, 0);
        return sum / this.marks.length;
    }

    
    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 50) return "C";
        else return "F";
    }
}


const s1 = new Student("Akhi", [95, 92, 88, 90]);
const s2 = new Student("Rohan", [70, 65, 60, 72]);
const s3 = new Student("Neha", [40, 55, 35, 50]);

console.log(`${s1.name} → Avg: ${s1.calculateAverage().toFixed(2)}, Grade: ${s1.getGrade()}`);
console.log(`${s2.name} → Avg: ${s2.calculateAverage().toFixed(2)}, Grade: ${s2.getGrade()}`);
console.log(`${s3.name} → Avg: ${s3.calculateAverage().toFixed(2)}, Grade: ${s3.getGrade()}`);