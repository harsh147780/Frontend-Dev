let marks = [95, 65, 80, 85, 70];

let total = 0;
let failedSubjects = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
    if (marks[i] < 40) {
        failedSubjects++;
    }
}

let avg = total / marks.length;
let percentage = avg;

let grade = " ";

if (percentage  >= 90 && percentage <= 100) {
    grade = "A+";
} else if (percentage >= 75) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}

// Final result
console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${avg.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);

// Rule: If failed in 2 or more subjects → Repeat Year
if (failedSubjects >= 2) {
    console.log("Result: Repeat Year");
} else if (grade === "Fail") {
    console.log("Result: Fail");
} else {
    console.log("Result: Pass");
}