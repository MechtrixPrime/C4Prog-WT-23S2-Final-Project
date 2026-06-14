const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let valid = true;

    // clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // regex patterns
    const namePattern = /^[A-Za-z\s'-]{2,50}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // name validation
    if (!namePattern.test(name)) {
        nameError.textContent = "Please enter a valid name (2–50 letters).";
        valid = false;
    }

    // email validation
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // message validation
    if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        valid = false;
    }

    // success
    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});