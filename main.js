document.addEventListener('DOMContentLoaded', () => {
  const captchaImage = document.getElementById('captcha-image');
  const captchaInput = document.getElementById('captcha-input');
  const captchaButton = document.getElementById('captcha-button');
  const captchaResult = document.getElementById('captcha-result');

  let captchaText = generateCaptcha();
  captchaImage.src = `data:image/svg+xml;base64,${btoa(generateSvgCaptcha(captchaText))}`;

  captchaButton.addEventListener('click', () => {
    if (captchaInput.value === captchaText) {
      captchaResult.textContent = 'Captcha Verified!';
      captchaResult.style.color = 'green';
      captchaText = generateCaptcha();
      captchaImage.src = `data:image/svg+xml;base64,${btoa(generateSvgCaptcha(captchaText))}`;
      captchaInput.value = '';
    } else {
      captchaResult.textContent = 'Captcha Failed. Try again.';
      captchaResult.style.color = 'red';
    }
  });

  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  }

  function generateSvgCaptcha(text) {
    const width = 200;
    const height = 50;
    const fontSize = 30;

    let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<rect width="${width}" height="${height}" fill="#f0f0f0" />`;
    
    for (let i = 0; i < text.length; i++) {
        const x = (width / text.length) * i + 10;
        const y = height / 2 + fontSize / 3;
        const rotate = (Math.random() - 0.5) * 30; // Random rotation
        const color = `hsl(${Math.random() * 360}, 70%, 30%)`; // Random color
        svg += `<text x="${x}" y="${y}" font-size="${fontSize}" fill="${color}" transform="rotate(${rotate} ${x} ${y})">${text[i]}</text>`;
    }

    // Add noise lines
    for (let i = 0; i < 5; i++) {
        const x1 = Math.random() * width;
        const y1 = Math.random() * height;
        const x2 = Math.random() * width;
        const y2 = Math.random() * height;
        svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(0,0,0,0.2)" stroke-width="2" />`;
    }

    svg += `</svg>`;
    return svg;
  }
});