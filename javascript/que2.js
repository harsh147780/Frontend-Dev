let accountType = "savings";
let amount = 120000;
let years = 3;

let intrestRate = 0;

if (accountType === "savings") {
    intrestRate = 4;
} else if (accountType === "fixed") {
    intrestRate = 6.5;
} else {
    console.log("Invalid account type");
    process.exit();
}

if (amount > 100000) {
    intrestRate += 1;
}
let interest = (amount * interestRate * years) / 100;
let totalAmount = amount + interest;

console.log(`Account Type: ${accountType}`);
console.log(`Interest Rate: ${interestRate}%`);
console.log(`Interest Earned: ₹${interest}`);
console.log(`Total Amount after ${years} years: ₹${totalAmount}`);