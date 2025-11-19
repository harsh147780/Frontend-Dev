function Product(name, price) {
    this.name = name;
    this.price = price;
}


Product.prototype.applyDiscount = function(percent) {
    const discountAmount = (this.price * percent) / 100;
    const newPrice = this.price - discountAmount;
    return newPrice;
};


const p1 = new Product("Laptop", 60000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Shoes", 3500);


console.log(`${p1.name} new price: ₹${p1.applyDiscount(10)}`);  
console.log(`${p2.name} new price: ₹${p2.applyDiscount(25)}`);  
console.log(`${p3.name} new price: ₹${p3.applyDiscount(20)}`);  