document.addEventListener('DOMContentLoaded', function() {
    const captchaImage = document.getElementById('captchaImage');
    const captchaInput = document.getElementById('captchaInput');
    const verifyButton = document.getElementById('verifyButton');
    const result = document.getElementById('result');

    // Mock captcha image (replace with actual captcha generation/retrieval)
    const captchaText = generateCaptcha();
    captchaImage.src = generateCaptchaImage(captchaText);

    verifyButton.addEventListener('click', function() {
        if (captchaInput.value === captchaText) {
            result.textContent = 'Captcha verified!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Captcha incorrect. Try again.';
            result.style.color = 'red';
            // Regenerate captcha for next attempt
            const newCaptchaText = generateCaptcha();
            captchaImage.src = generateCaptchaImage(newCaptchaText);
            captchaInput.value = '';
        }
    });

    // Helper functions for captcha generation (replace with real implementation)
    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
    }

    function generateCaptchaImage(text) {
        // In a real application, this would generate an actual image.
        // Here, we return a simple text-based representation.
        const canvas = document.createElement('canvas');
        canvas.width = 150;
        canvas.height = 50;
        const ctx = canvas.getContext('2d');
        ctx.font = '24px Arial';
        ctx.fillText(text, 20, 35);
        return canvas.toDataURL(); // Converts canvas to a data URL representing the image
    }
});