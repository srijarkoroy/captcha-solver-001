document.addEventListener('DOMContentLoaded', function() {
    const captchaElement = document.getElementById('captcha');
    const captchaInput = document.getElementById('captchaInput');
    const submitBtn = document.getElementById('submitBtn');
    const resultElement = document.getElementById('result');

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        const svg = `<svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">` +
                    `<text x="10" y="35" font-size="24">${captcha}</text>` +
                    `</svg>`;

        captchaElement.innerHTML = svg;
        return captcha;
    }

    let currentCaptcha = generateCaptcha();

    submitBtn.addEventListener('click', function() {
        if (captchaInput.value === currentCaptcha) {
            resultElement.textContent = 'Captcha Matched!';
            currentCaptcha = generateCaptcha(); // Generate a new captcha
            captchaInput.value = ''; // Clear the input field
        } else {
            resultElement.textContent = 'Captcha Not Matched. Try again.';
        }
    });
});