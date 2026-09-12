const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// CLOSE MENU AFTER CLICKING

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// APPOINTMENT FORM

const form = document.getElementById("appointmentForm");
const dateInput = document.getElementById("date");
const successMessage = document.getElementById("successMessage");


// TODAY'S DATE

const today = new Date().toISOString().split("T")[0];

dateInput.min = today;


// FORM SUBMISSION

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;


    // NAME

    if (name.length < 3) {

        alert("Please enter a valid name.");

        return;
    }


    // PHONE

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        alert("Please enter a valid 10-digit phone number.");

        return;
    }


    // EMAIL

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }


    // SERVICE

    if (service === "") {

        alert("Please select a service.");

        return;
    }


    // DATE

    if (date === "") {

        alert("Please select an appointment date.");

        return;
    }


    // TIME

    if (time === "") {

        alert("Please select a preferred time.");

        return;
    }


    // SUCCESS

    successMessage.textContent =
        "✓ Appointment request submitted successfully!";

    successMessage.style.color = "#0a8f75";


    form.reset();

    dateInput.min = today;

});
