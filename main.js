document.getElementById('submitButton').addEventListener('click', function() {
    const userInput = document.getElementById('captchaInput').value;
    const captchaImageSrc = document.getElementById('captchaImage').src; //Unused but keeps structure

    // Replace with actual captcha solving logic (e.g., API call)
    // This is a placeholder for demonstration purposes
    let solved = false;
    if (userInput === "ABCD") {
        solved = true;
    }

    let message = solved ? 'Captcha Solved!' : 'Incorrect Captcha. Try again.';

    document.getElementById('result').textContent = message;
});
