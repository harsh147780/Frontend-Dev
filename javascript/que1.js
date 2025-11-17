let orderAmount = 450;
let isPremium = false;
let isRemote = true;

let deliveryFee = 0;
let deliveryDays = 3;

if(orderAmount < 500){
    deliveryFee = 50;
}

if(isPremium){
    deliveryFee=0;
}

if(isRemote){
    deliveryDays += 2;
}

let totalCost = orderAmount + deliveryFee;
console.log(`Total Cost: ₹${totalCost}`);
console.log(`Estimated Delivery Time: ${deliveryDays} days`);