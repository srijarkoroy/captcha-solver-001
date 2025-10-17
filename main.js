function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

function drawCaptcha(captcha) {
    const svg = document.getElementById('captcha-svg');
    svg.innerHTML = ''; // Clear previous captcha
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '10');
    text.setAttribute('y', '50');
    text.setAttribute('font-size', '30');
    text.textContent = captcha;
    svg.appendChild(text);
}

let captchaText = generateCaptcha();
drawCaptcha(captchaText);

document.getElementById('captcha-submit').addEventListener('click', function() {
    const userInput = document.getElementById('captcha-input').value;
    const resultElement = document.getElementById('captcha-result');

    if (userInput === captchaText) {
        resultElement.textContent = 'Captcha correct!';
        resultElement.style.color = 'green';
        captchaText = generateCaptcha();
        drawCaptcha(captchaText);
        document.getElementById('captcha-input').value = ''; // Clear input
    } else {
        resultElement.textContent = 'Captcha incorrect. Please try again.';
        resultElement.style.color = 'red';
        captchaText = generateCaptcha();
        drawCaptcha(captchaText);
        document.getElementById('captcha-input').value = ''; // Clear input
    }
});