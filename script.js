document.getElementById('submitButton').addEventListener('click', () => {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('error');
    const emailSuccess = document.getElementById('success');
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Whoops! It looks like you forgot to add your email";
        emailSuccess.textContent = ""; // Clear success message
        emailInput.style.border = '1px solid red';
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please provide a valid email address";
        emailSuccess.textContent = ""; // Clear success message
        emailInput.style.border = '1px solid red';
    } else {
        // Reset error message
        emailError.textContent = "";
        // Display success message
        emailSuccess.textContent = "Successful!";
    }
});
