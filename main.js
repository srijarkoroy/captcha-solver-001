// main.js

const captchaImage = document.getElementById('captcha-image');
const captchaInput = document.getElementById('captcha-input');
const verifyButton = document.getElementById('verify-button');
const resultParagraph = document.getElementById('result');

// Simple captcha generation (replace with a more robust solution)
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

let generatedCaptcha = '';

function updateCaptchaImage() {
    generatedCaptcha = generateCaptcha();
    // For demonstration, we use a data URL; in a real app, fetch an image from a server.
    const canvas = document.createElement('canvas');
    canvas.width = 150;
    canvas.height = 50;
    const ctx = canvas.getContext('2d');
    ctx.font = '30px Arial';
    ctx.fillText(generatedCaptcha, 10, 40);
    captchaImage.src = canvas.toDataURL();
}

updateCaptchaImage();

verifyButton.addEventListener('click', () => {
    const userInput = captchaInput.value;
    if (userInput === generatedCaptcha) {
        resultParagraph.textContent = 'Captcha verified!';
        resultParagraph.style.color = 'green';
        updateCaptchaImage(); // Generate a new captcha after successful verification
        captchaInput.value = '';
    } else {
        resultParagraph.textContent = 'Captcha verification failed.';
        resultParagraph.style.color = 'red';
        updateCaptchaImage(); // Generate a new captcha after failed verification
        captchaInput.value = '';
    }
});