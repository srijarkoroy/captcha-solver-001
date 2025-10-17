document.addEventListener('DOMContentLoaded', function() {
    const captchaSvg = document.getElementById('captcha-svg');
    const captchaInput = document.getElementById('captcha-input');
    const captchaSubmit = document.getElementById('captcha-submit');
    const captchaResult = document.getElementById('captcha-result');

    let captchaText = generateCaptcha();

    function generateCaptcha() {
        const chars = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ23456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        // Clear existing SVG content
        captchaSvg.innerHTML = '';

        // Add the captcha text as SVG text elements with distortions
        for (let i = 0; i < captcha.length; i++) {
            const char = captcha[i];
            const x = 20 + i * 25;
            const y = 60;
            const rotation = Math.random() * 20 - 10; // Small rotation

            const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textElement.setAttribute('x', x);
            textElement.setAttribute('y', y);
            textElement.setAttribute('transform', `rotate(${rotation} ${x} ${y})`);
            textElement.setAttribute('font-size', '24');
            textElement.setAttribute('fill', 'black');
            textElement.textContent = char;

            captchaSvg.appendChild(textElement);
        }

        return captcha;
    }

    captchaSubmit.addEventListener('click', function() {
        const userInput = captchaInput.value;
        if (userInput === captchaText) {
            captchaResult.textContent = 'Captcha Correct!';
            captchaResult.style.color = 'green';
            captchaText = generateCaptcha(); // Generate a new captcha after success
            captchaInput.value = ''; // Clear input
        } else {
            captchaResult.textContent = 'Captcha Incorrect. Try again.';
            captchaResult.style.color = 'red';
            captchaInput.value = ''; // Clear input
        }
    });
});