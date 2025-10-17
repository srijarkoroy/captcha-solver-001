document.addEventListener('DOMContentLoaded', function() {
    const captchaElement = document.getElementById('captcha');
    const captchaInput = document.getElementById('captchaInput');
    const submitButton = document.getElementById('submitButton');
    const resultElement = document.getElementById('result');

    let captchaText = generateCaptcha();

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
    }

    function displayCaptcha() {
        captchaElement.textContent = captchaText;
    }

    displayCaptcha();

    submitButton.addEventListener('click', function() {
        if (captchaInput.value === captchaText) {
            resultElement.textContent = 'Captcha Correct!';
            resultElement.style.color = 'green';
            captchaText = generateCaptcha();
            displayCaptcha();
            captchaInput.value = '';
        } else {
            resultElement.textContent = 'Captcha Incorrect. Try again.';
            resultElement.style.color = 'red';
            captchaInput.value = '';
        }
    });
});