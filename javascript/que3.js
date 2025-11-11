let showType = "evening";  //morning or evening
let numTickets = 4;
let age = 40;
let isStudent = false;

let ticketprice = 0;

if(showType === "morning"){
    ticketprice = 250;
} else if(showType === "evening"){
    ticketprice = 350;
}

let basePrice =  ticketprice * numTickets;
let discount = 0;

if(isStudent){
    discount = 0.10*basePrice;
} else if(age >50){
    discount = 0.20*basePrice;
}
else{
    discount = 0.5*basePrice;
}
let discountTotal = basePrice - discount;

let serviceFee = numTickets > 3 ? 50 : 0;

let finalAmount  = discountTotal + serviceFee;

console.log(`Base Price: ₹${basePrice}`);
console.log(`Discounted Total: ₹${discountTotal.toFixed(2)}`);
console.log(`Final Amount (after service fee): ₹${finalAmount.toFixed(2)}`);

