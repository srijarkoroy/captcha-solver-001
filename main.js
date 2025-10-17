document.addEventListener('DOMContentLoaded', function() {
    const captchaImage = document.getElementById('captcha-image');
    const captchaInput = document.getElementById('captcha-input');
    const captchaSubmit = document.getElementById('captcha-submit');
    const captchaResult = document.getElementById('captcha-result');

    // Simple captcha data (replace with server-side generation in real application)
    const captchaData = {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAIAAAB+DGcgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADnSURBVGhD7dExAQAgEASC/nv0RNgKcjKyKxWq1Wo1GIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIVqtVqNRiEq1Wo1Go1CIULgAYJ0v8rAAAAAElFTkSuQmCC',
        text: 'ABCD'
    };

    captchaImage.src = captchaData.image;

    captchaSubmit.addEventListener('click', function() {
        if (captchaInput.value.toUpperCase() === captchaData.text) {
            captchaResult.textContent = 'Captcha Matched!';
            captchaResult.style.color = 'green';
        } else {
            captchaResult.textContent = 'Captcha Mismatch!';
            captchaResult.style.color = 'red';
        }
    });
});