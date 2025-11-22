document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    // Get inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Clear old errors
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    // Validate Name
    if (name.value.trim() === "") {
        setError(name, "Name is required");
        valid = false;
    }

    // Validate Email
    if (email.value.trim() === "") {
        setError(email, "Email is required");
        valid = false;
    } else if (!email.value.includes("@")) {
        setError(email, "Enter a valid email");
        valid = false;
    }

    // Validate Phone
    if (phone.value.trim() === "") {
        setError(phone, "Phone is required");
        valid = false;
    } else if (!/^[0-9]{11}$/.test(phone.value)) {
        setError(phone, "Enter 11-digit number");
        valid = false;
    }

    // Validate Password
    if (password.value.trim() === "") {
        setError(password, "Password is required");
        valid = false;
    }

    // Confirm Password
    if (confirmPassword.value.trim() === "") {
        setError(confirmPassword, "Please confirm password");
        valid = false;
    } else if (password.value !== confirmPassword.value) {
        setError(confirmPassword, "Passwords do not match");
        valid = false;
    }

    // Success
    if (valid) {
        alert("Registration Successful!");
        document.getElementById("regForm").reset();
    }
});

function setError(input, message) {
    input.nextElementSibling.textContent = message;
}
