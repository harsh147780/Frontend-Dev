// Q3: Math Utility Dashboard
let x = 16.75;
console.log(`
🔹 Math Dashboard Summary
-------------------------
Original: ${x}
Rounded: ${Math.round(x)}
Square Root: ${Math.sqrt(x).toFixed(2)}
Power (x³): ${Math.pow(x, 3).toFixed(2)}
Random (10–50): ${Math.floor(Math.random() * 41) + 10}
`);
