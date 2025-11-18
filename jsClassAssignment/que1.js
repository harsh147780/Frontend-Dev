class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        const discountAmount = (this.price * percent) / 100;
        this.price = this.price - discountAmount;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

const p1 = new Product(1, "Shoes", 1500, "Fashion");
const p2 = new Product(2, "Mobile Case", 200, "Accessories");
const p3 = new Product(3, "Laptop", 55000, "Electronics");
const p4 = new Product(4, "T-Shirt", 800, "Fashion");



p1.applyDiscount(10); 
p3.applyDiscount(5);  




const products = [p1, p2, p3, p4];

const expensiveProducts = products.filter(product => product.price > 1000);


// Display results in console
console.log("All Products:");
products.forEach(p => console.log(p.getDetails()));

console.log("\nProducts with Price > 1000:");
expensiveProducts.forEach(p => console.log(p.getDetails()));


