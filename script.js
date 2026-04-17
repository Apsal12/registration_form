var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var submitBtn = document.getElementById("submitBtn");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.innerText = "Name cannot be empty Enter your name";
        return false;
    } else {
        nameError.innerText = "";
        return true;
    }
}

function validateEmail() {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(emailInput.value)) {
        emailError.innerText = "Invalid email";
        return false;
    } else {
        emailError.innerText = "";
        return true;
    }
}
function validatePassword() {
    if (passwordInput.value.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters";
        return false;
    } else {
        passwordError.innerText = "";
        return true;
    }
}

function checkForm() {
    if (validateName() && validateEmail() && validatePassword()) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

nameInput.addEventListener("input", checkForm);
emailInput.addEventListener("input", checkForm);
passwordInput.addEventListener("input", checkForm);


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form Submitted Successfully!");
});




var textarea = document.getElementById("message");
var counter = document.getElementById("counter");
var warning = document.getElementById("warning");

var maxLength = 200;

textarea.addEventListener("input", function () {
    var textLength = textarea.value.length;

    counter.innerText = textLength + " / " + maxLength + " characters";

    if (textLength >= maxLength) {
        warning.innerText = "Character limit reached!";
    } else {
        warning.innerText = "";
    }
});