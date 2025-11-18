function bookTicket() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let seats = document.getElementById("seats").value;

    // Regex patterns
    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ---- Validations ----
    if (!namePattern.test(name)) {
        alert("Invalid Name! Only alphabets allowed.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid Email!");
        return;
    }

    if (seats < 1 || seats > 10) {
        alert("Seats must be between 1 and 10!");
        return;
    }

    // ---- Booking Object ----
    const booking = {
        name: name,
        email: email,
        seats: seats
    };

    // ---- Display Ticket ----
    document.getElementById("result").innerHTML =
        `🎟 Ticket Booked! <br>
    Name: ${booking.name} <br>
    Email: ${booking.email} <br>
    Seats: ${booking.seats}`;

    console.log("Booking Details:", booking);
}
