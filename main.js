function generateCaptcha() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

function displayCaptcha() {
  const captchaText = generateCaptcha();
  document.getElementById('captchaText').textContent = captchaText;
  return captchaText;
}

let currentCaptcha = displayCaptcha();

document.getElementById('submitButton').addEventListener('click', function() {
  const userInput = document.getElementById('captchaInput').value;
  const resultElement = document.getElementById('result');

  if (userInput === currentCaptcha) {
    resultElement.textContent = 'CAPTCHA Correct!';
    resultElement.style.color = 'green';
    currentCaptcha = displayCaptcha(); // Generate a new CAPTCHA after success
    document.getElementById('captchaInput').value = ''; // Clear input field
  } else {
    resultElement.textContent = 'CAPTCHA Incorrect. Try again.';
    resultElement.style.color = 'red';
    currentCaptcha = displayCaptcha(); // Generate a new CAPTCHA after failure
    document.getElementById('captchaInput').value = ''; // Clear input field
  }
});
