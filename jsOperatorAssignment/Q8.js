// Q8: Dynamic Discount Evaluator
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];
const discountedCart = cart.map(p => {
  let d = 0;
  if (p.category === "electronics") d = 0.10;
  else if (p.category === "fashion") d = 0.05;
  return { ...p, finalPrice: p.price - p.price * d };
});
let total = discountedCart.reduce((s, i) => s + i.finalPrice, 0);
if (total > 50000) total -= total * 0.05;
console.log("🛒 Discounted Cart Summary");
discountedCart.forEach(i => console.log(`${i.item} (${i.category}) → ₹${i.finalPrice.toFixed(2)}`));
console.log(`Final Total: ₹${total.toFixed(2)}`);
