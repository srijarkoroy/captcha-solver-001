const captchaEl = document.getElementById('captcha');
const captchaInputEl = document.getElementById('captchaInput');
const submitBtnEl = document.getElementById('submitBtn');
const resultEl = document.getElementById('result');

let captchaText = '';

function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    captchaText = '';
    for (let i = 0; i < 6; i++) {
        captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    captchaEl.textContent = captchaText;
}

function checkCaptcha() {
    if (captchaInputEl.value === captchaText) {
        resultEl.textContent = 'Captcha Matched!';
        resultEl.style.color = 'green';
    } else {
        resultEl.textContent = 'Captcha Not Matched!';
        resultEl.style.color = 'red';
    }
    generateCaptcha();
    captchaInputEl.value = '';
}

submitBtnEl.addEventListener('click', checkCaptcha);

generateCaptcha();