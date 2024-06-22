document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");
    const roomSelect = document.getElementById("room");

    form.addEventListener("submit", function(event) {
        const checkinDate = new Date(checkinInput.value);
        const checkoutDate = new Date(checkoutInput.value);
        const today = new Date();
        const dayInMilliseconds = 24 * 60 * 60 * 1000;

        if (checkinDate < today) {
            alert("Check-in date cannot be in the past.");
            event.preventDefault();
            return;
        }

        if (checkoutDate <= checkinDate) {
            alert("Check-out date must be after check-in date.");
            event.preventDefault();
            return;
        }

        if ((checkoutDate - checkinDate) / dayInMilliseconds > 10) {
            alert("Booking cannot be more than 10 days.");
            event.preventDefault();
            return;
        }

        calculatePrice(checkinDate, checkoutDate, roomSelect.value);
    });

    function calculatePrice(checkinDate, checkoutDate, roomType) {
        const dayInMilliseconds = 24 * 60 * 60 * 1000;
        const days = (checkoutDate - checkinDate) / dayInMilliseconds;
        let pricePerNight;

        if (roomType === "deluxe") {
            pricePerNight = 200;
        } else if (roomType === "standard") {
            pricePerNight = 100;
        }

        const totalPrice = days * pricePerNight;
        alert(`Total price for your stay is $${totalPrice}`);
    }
});
