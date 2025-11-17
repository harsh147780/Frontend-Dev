// Q1: Scope Conflict Resolver
let bonus = 5000;
function calculateSalary(isPermanent) {
  let salary = 40000;
  if (isPermanent) salary += bonus;
  console.log(`Total Salary: ₹${salary}`);
  console.log(`Global bonus remains: ₹${bonus}`);
}
calculateSalary(true);
calculateSalary(false);
