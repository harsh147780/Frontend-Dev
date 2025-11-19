const menu = {
    pizza: 250,
    burger: 120,
    pasta: 180,
    momos: 100,
    fries: 80
};

function calculateBill(orderItems) {
    try {
        
        const priceList = orderItems.map(item => {
            if (!menu[item]) {
                throw new Error(`Item not found: ${item}`);
            }
            return menu[item];
        });

        
        const total = priceList.reduce((sum, price) => sum + price, 0);

        return `Total Bill: ₹${total}`;

    } catch (err) {
        return `Error: ${err.message}`;
    }
}


console.log(calculateBill(["pizza", "fries"]));          
console.log(calculateBill(["burger", "pasta", "momos"]));
console.log(calculateBill(["pizza", "icecream"]));