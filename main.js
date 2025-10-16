document.addEventListener('DOMContentLoaded', function() {
    const captchaElement = document.getElementById('captcha');
    const captchaInput = document.getElementById('captchaInput');
    const submitBtn = document.getElementById('submitBtn');
    const resultElement = document.getElementById('result');

    let captchaText = generateCaptcha();
    captchaElement.innerHTML = createSvgCaptcha(captchaText);

    submitBtn.addEventListener('click', function() {
        if (captchaInput.value === captchaText) {
            resultElement.textContent = 'Captcha Matched!';
        } else {
            resultElement.textContent = 'Captcha Not Matched.';
        }

        captchaText = generateCaptcha();
        captchaElement.innerHTML = createSvgCaptcha(captchaText);
        captchaInput.value = '';
    });

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
    }

    function createSvgCaptcha(text) {
        const svgWidth = 200;
        const svgHeight = 50;
        const textX = 10;
        const textY = 35;

        let svg = `<svg width="${svgWidth}" height="${svgHeight}">`;
        svg += `<text x="${textX}" y="${textY}" font-size="24" fill="black">${text}</text>`;
        svg += `</svg>`;
        return svg;
    }
});