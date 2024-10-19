document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    function validateForm() {
        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameError.style.visibility = 'visible';
            isValid = false;
        } else {
            nameError.style.visibility = 'hidden';
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format';
            emailError.style.visibility = 'visible';
            isValid = false;
        } else {
            emailError.style.visibility = 'hidden';
        }

        // Password validation
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordError.style.visibility = 'visible';
            isValid = false;
        } else {
            passwordError.style.visibility = 'hidden';
        }

        // Enable/Disable submit button
        submitBtn.disabled = !isValid;
    }

    // Add input event listeners for real-time validation
    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    // Reset form after submission
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
        
        if (!submitBtn.disabled) {
            alert('Form submitted successfully!');
            
            // Reset the form fields
            document.getElementById('registrationForm').reset();

            // Reset error messages and disable submit button
            nameError.style.visibility = 'hidden';
            emailError.style.visibility = 'hidden';
            passwordError.style.visibility = 'hidden';
            submitBtn.disabled = true; // Disable the button after reset
        }
    });
});
