// Q2: String Manipulation Report
let product = " wireless headphones PRO ";
product = product.trim().toLowerCase();
product = product.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
product = product.replace("Pro", "Pro Edition");
console.log(`Cleaned Title: ${product}`);
console.log(`Title Length: ${product.length}`);
